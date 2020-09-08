%{
//importaciones
	import { AstNode } from "./ast/ast-node.js";
	export var Root = null;
%}
%lex
%options flex case-insensitive
%%
\s+                                 /* skip whitespace */;
"var"											return 'var';
"E"												return 'E'
[l][0-9]+             		return 'label';
[t][0-9]+									return 'tmp';
[0-9]+("."[0-9]+)?\b  		return 'number'
"call"										return 'call';
"H"												return 'hp';
"P"												return 'sp';
"Heap"										return 'heap';
"Stack"										return 'stack';
"if"											return 'if';
"="												return 'eq';
","												return 'comma';
"+"												return "plus";
"-"												return "min";
"/"												return "div";
"\"%c\""									return "parameter";
"\"%i\""  								return "parameter";
"\"%d\""									return "parameter";
"%"												return "mod";
"*"												return "mult";
"goto"										return "goto";
"proc"										return 'proc'
"=="											return "gotoeq";
"<>"											return "gotoneq";
">"												return "gotogt";
"<"												return "gotolt";
">="											return "gotogte";
"<="											return "gotolte";
"begin"										return "begin";
"end"											return "end";
"["												return "squarel";
"]"												return "squarer";
"print"										return "print";
"("												return 'lpar';
")"												return 'rpar';
":"												return 'colon';
[_A-Za-z][_A-Za-z0-9]*		return 'identifier';
";"[^\n]*                	/comentario lineal/
"##"[^\n]*                /comentario lineal/
.                         return 'invalid';
<<EOF>>                   return 'EOF';
/lex

%start INICIO
%%

INICIO
	: STMT_LIST EOF
        {
			Root = $1;
            $$ = $1;
        }
    ;

STMT_LIST
	: STMT_LIST STMT
		{
			$1.setNext($2);
		}
	| STMT
		{
			$$ = $1;
		}
	;

STMT
	:CALL_STMT {
		$$ = $1;
	}
	| TMP_STMT {
		$$ = $1;
	}
	| JMP_STMT {
		$$ = $1;
	}
	| HEAP_STMT {
		$$ = $1;
	}
	| STACK_STMT {
		$$ = $1;
	}
	| PRINT_STMT {
		$$ = $1;
	}
	| METHOD_DECL_STMT {
		$$ = $1;
	}
	| LABEL_STMT {
		$$ = $1;
	}
	| DECL_STMT {
		$$ = $1;
	}
	;


DECL_STMT
	: var sp  {
		$$ = new AstNode("var",null, @1.first_line,@1.first_column,
						new AstNode("sp", null, @2.first_line,@2.first_column)
						);
	}
	| var E  {
		$$ = new AstNode("var",null, @1.first_line,@1.first_column,
						new AstNode("e", null, @2.first_line,@2.first_column)
						);
	}
	| var hp  {
			$$ = new AstNode("var",null, @1.first_line,@1.first_column,
						new AstNode("hp", null, @2.first_line,@2.first_column)
					);
	}
	| var TMP_LIST {
		$$ = new AstNode("var",null, @1.first_line,@1.first_column);
		$2.forEach(el=>$$.addChild(el));
	}
	| var heap squarel squarer {
			$$ = new AstNode("var",null, @1.first_line,@1.first_column,
					new AstNode("heap",null,@2.first_line, @2.first_column)
				);
	}
	| var stack squarel squarer {
			$$ = new AstNode("var",null, @3.first_line,@3.first_column,
				new AstNode("stack",null,@2.first_line, @2.first_column)
			);
	}
	;

TMP_LIST
	: TMP_LIST comma tmp {
		$$ = $1;
		$$.push(new AstNode("tmp", $3, @3.first_line, @3.first_column));
	}
	| tmp {
		$$ = [
			new AstNode("tmp", $1, @1.first_line, @1.first_column)
		]
	}
	;

LABEL_STMT
	: label comma LABEL_STMT
	{
		$1.next = new AstNode("label",$3,@3.first_line, @3.first_column);
		$$ = $1;
	}
	| label colon
	{
		$$ = new AstNode("label", $1, @1.first_line, @1.first_column);
	}
	;

CALL_STMT
	: call identifier {
		$$ = new AstNode("call", $2, @1.first_line, @1.first_column );
	}
	;

TMP_STMT
	: tmp eq tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode("tmp", $3, @3.first_line,@3.first_column)
						);
	}
	| tmp eq number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode("number", parseFloat($3), @3.first_line,@3.first_column)
						);
	}
	//inicio
	|  tmp eq sp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode("sp", null, @3.first_line,@3.first_column)
						);
	}
	| tmp eq hp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode("hp", null, @3.first_line,@3.first_column)
						);
	}
	//we begin stack access
	| 	tmp eq 	stack squarel number squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("stack",null,@3.first_line, @3.first_column,
						new AstNode("number",parseFloat($5),@5.first_line, @5.first_column)
					)
				);

	}
	| tmp eq stack 	squarel tmp	squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("stack",null,@3.first_line, @3.first_column,
						new AstNode("tmp", $5, @5.first_line, @5.first_column)
					)
				);

	}
	| 	tmp eq 	stack squarel sp squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("stack",null,@3.first_line, @3.first_column,
						new AstNode("sp", null, @5.first_line, @5.first_column)
					)
				);

	}
	// fin de stack access
	| tmp eq heap squarel number squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("heap",null,@3.first_line, @3.first_column,
						new AstNode("number",parseFloat($5),@5.first_line, @5.first_column)
					)
				);

	}
	| tmp eq heap squarel tmp squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("heap",null,@3.first_line, @3.first_column,
						new AstNode("tmp", $5, @5.first_line, @5.first_column)
					)
				);

	}
	| tmp eq heap squarel hp squarer
	{
		$$ = new AstNode("=", null, @2.first_line,@2.first_column,
					new AstNode("tmp",$1, @1.first_line, @1.first_column),
					new AstNode("heap",null,@3.first_line, @3.first_column,
						new AstNode("hp", null, @5.first_line, @5.first_column)
					)
				);

	}
	//fin de heap access
	| tmp eq number OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("number", parseFloat($3), @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| tmp eq number OPERATOR tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("number", parseFloat($3), @3.first_line,@3.first_column),
							new AstNode("tmp", $5, @5.first_line,@5.first_column)
							)
						);
	}
	//fix
	| tmp eq tmp OPERATOR tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("tmp", $3, @3.first_line,@3.first_column),
							new AstNode("tmp", $5, @5.first_line,@5.first_column)
							)
						);
	}
	| tmp eq tmp OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("tmp", $3, @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column),
							)
						);
	}
	//fin fix
	| tmp eq sp OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("sp", null, @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| tmp eq number OPERATOR sp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("number", parseFloat($3), @3.first_line,@3.first_column),
							new AstNode("sp", null, @5.first_line,@5.first_column)
							)
						);
	}
	| tmp eq hp OPERATOR number
	{
		$$ = new AstNode("=",null, @1.first_line,@1.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("hp", null, @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| tmp eq number OPERATOR hp
	{
		$$ = new AstNode("=",null, @1.first_line,@1.first_column,
						new AstNode("tmp", $1, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("number", parseFloat($3), @3.first_line,@3.first_column),
							new AstNode("hp", null, @5.first_line,@5.first_column)
							)
						);
	}
	;

ERROR_ASSIGN
: E eq number
{
	$$ = new AstNode("=",null,@2.first_line,@2.first_column,
				new AstNode("E",null, @1.first_line,@1.first_column),
				new AstNode("number", parseFloat(number), @3.first_line, @3.first_column)
			)
}
;

OPERATOR
	: plus
	{
		$$ = $1;
	}
	| min
	{
		$$ = $1;
	}
	| div
	{
		$$ = $1;
	}
	| mod
	{
		$$ = $1;
	}
	| mult
	{
		$$ = $1;
	}
	;

HEAP_STMT
	: 	heap squarel tmp squarer eq number
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("number", parseFloat($6), @6.first_line, @6.first_column)
				);
	}
	| 	heap squarel hp squarer eq number
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("hp",null,@3.first_line, @3.first_column)
					),
					new AstNode("number", parseFloat($6), @6.first_line, @6.first_column)
				);
	}
	|	heap squarel tmp squarer eq tmp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("tmp", $6, @6.first_line, @6.first_column)
				);
	}
	| 	heap squarel hp squarer eq tmp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("hp",null,@3.first_line, @3.first_column)
					),
					new AstNode("tmp", $6, @6.first_line, @6.first_column)
				);
	}
	// inicio duplicado
	|	heap squarel tmp squarer eq hp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("hp",null, @6.first_line, @6.first_column)
				);
	}
	| 	heap squarel hp squarer eq hp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("hp",null,@3.first_line, @3.first_column)
					),
					new AstNode("hp", null, @6.first_line, @6.first_column)
				);
	}
	|	heap squarel tmp squarer eq sp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("sp", null, @6.first_line, @6.first_column)
				);
	}
	| 	heap squarel hp squarer eq  sp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("heap",null,@1.first_line, @1.first_column,
						new AstNode("hp",null,@3.first_line, @3.first_column)
					),
					new AstNode("sp", null, @6.first_line, @6.first_column)
				);
	} //fin duplicado
	| 	hp eq hp OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("hp", null, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("hp", null, @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| 	hp eq hp OPERATOR tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("hp", null, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("hp", null, @3.first_line,@3.first_column),
							new AstNode("tmp", $5, @5.first_line,@5.first_column)
							)
						);
	}
	;

STACK_STMT
	: stack squarel	tmp squarer eq number
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("number",parseFloat($6),@6.first_line, @6.first_column)
				);

	}
	|	stack squarel tmp squarer eq tmp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("tmp", $6, @6.first_line, @6.first_column)
				);
	}
	|	stack squarel sp squarer eq tmp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("sp",null,@3.first_line, @3.first_column)
					),
					new AstNode("tmp", $6,@6.first_line, @6.first_column)
				);
	}
	| 	stack squarel sp squarer eq number
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("sp",null,@3.first_line, @3.first_column)
					),
					new AstNode("number", parseFloat($6),@6.first_line, @6.first_column)
				);
	}
	//inicio de duplicado
	|	stack squarel tmp squarer eq sp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("sp",null,@6.first_line, @6.first_column)
				);

	}
	|	stack squarel tmp squarer eq hp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("tmp",$3,@3.first_line, @3.first_column)
					),
					new AstNode("hp", null, @6.first_line, @6.first_column)
				);
	}
	| 	stack squarel sp squarer eq sp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("sp",null,@3.first_line, @3.first_column)
					),
					new AstNode("sp", null ,@6.first_line, @6.first_column)
				);
	}
	| 	stack squarel sp squarer eq hp
	{
		$$ = new AstNode("=", null, @5.first_line,@5.first_column,
					new AstNode("stack",null,@1.first_line, @1.first_column,
						new AstNode("sp",null,@3.first_line, @3.first_column)
					),
					new AstNode("hp", null,@6.first_line, @6.first_column)
				);
	} // fin duplicado
	| 	sp eq hp OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
							new AstNode("sp", null, @1.first_line,@1.first_column),
							new AstNode($4, null, @4.first_line,@4.first_column,
								new AstNode("hp", null, @3.first_line,@3.first_column),
								new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| 	sp eq hp OPERATOR tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("sp", null, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line, @4.first_column,
							new AstNode("hp", null, @3.first_line,@3.first_column),
							new AstNode("tmp", $5, @5.first_line,@5.first_column)
							)
						);
	}
	| 	sp eq sp OPERATOR number
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("sp", null, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("sp", null, @3.first_line,@3.first_column),
							new AstNode("number", parseFloat($5), @5.first_line,@5.first_column)
							)
						);
	}
	| 	sp eq sp OPERATOR tmp
	{
		$$ = new AstNode("=",null, @2.first_line,@2.first_column,
						new AstNode("sp", null, @1.first_line,@1.first_column),
						new AstNode($4, null, @4.first_line,@4.first_column,
							new AstNode("sp", null, @3.first_line,@3.first_column),
							new AstNode("tmp", $5, @5.first_line,@5.first_column)
							)
						);
	}
	;

	JMP_STMT
	: goto label
	{
		$$ = new AstNode($1,
						 $2,
						 @1.first_line,
						 @1.first_column);

	}
	| IFINIT lpar number GOTO_OP tmp rpar goto label
	{
		$$ = new AstNode($4,
						 $8,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("number",parseFloat($3), @3.first_line, @3.first_column),
						 new AstNode("tmp", $5, @5.first_line, @5.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT number GOTO_OP tmp goto label
	{
		$$ = new AstNode($3,
						 $6,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("number",parseFloat($2), @2.first_line, @2.first_column),
						 new AstNode("tmp", $4, @5.first_line, @4.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT lpar tmp GOTO_OP number rpar goto label
	{
		$$ = new AstNode($4,
						 $8,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("tmp",$3, @3.first_line, @3.first_column),
						 new AstNode("number", parseFloat($5), @5.first_line, @5.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT tmp GOTO_OP number goto label
	{
		$$ = new AstNode($3,
						 $6,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("tmp",$2, @2.first_line, @2.first_column),
						 new AstNode("number", parseFloat($4), @4.first_line, @4.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT lpar tmp GOTO_OP tmp rpar goto label
	{
		$$ = new AstNode($4,
						 $8,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("tmp",$3, @3.first_line, @3.first_column),
						 new AstNode("tmp", $5, @5.first_line, @5.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT tmp GOTO_OP tmp goto label
	{
		$$ = new AstNode($3,
						 $6,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("tmp",$2, @2.first_line, @2.first_column),
						 new AstNode("tmp", $4, @4.first_line, @4.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT lpar number GOTO_OP number rpar goto label
	{
		$$ = new AstNode($4,
						 $8,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("number", parseFloat($3), @3.first_line, @3.first_column),
						 new AstNode("number", parseFloat($5), @5.first_line, @5.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	| IFINIT number GOTO_OP number goto label
	{
		$$ = new AstNode($3,
						 $6,
						 @1.first_line,
						 @1.first_column,
						 new AstNode("number", parseFloat($2), @2.first_line, @2.first_column),
						 new AstNode("number", parseFloat($4), @4.first_line, @4.first_column)
						);
		if($1 === true) $$.converToFalse()
	}
	;

	IFINIT
	: if
	{
		$$ = false
	}
	;
	/*
		HACER EL IFFLASE
	*/

	GOTO_OP
	: gotoeq
	{
		$$ = $1;
	}
	| gotoneq
	{
		$$ = $1;
	}
	| gotogt
	{
		$$ = $1;
	}
	| gotogte
	{
		$$ = $1;
	}
	| gotolt
	{
		$$ = $1;
	}
	| gotolte
	{
		$$ = $1;
	}
	;

PRINT_STMT
	: print lpar parameter comma tmp rpar
	{
		$$ = new AstNode($1, $3, @1.first_line, @1.first_column,
				new AstNode("tmp", $5, @5.first_line, @5.first_column)
			);
	}
	| print lpar parameter comma number rpar
	{
		$$ = new AstNode($1, $3, @1.first_line, @1.first_column,
				new AstNode("number", parseFloat($5), @5.first_line, @5.first_column)
			);
	}
	;

METHOD_DECL_STMT
	:  proc identifier begin STMT_LIST end
	{
		let begin_node = new AstNode("begin",null,@3.first_line, @3.first_column);
		begin_node.setNext($4);
		begin_node.setNext(new AstNode("end",null,@5.first_line, @5.first_column));
		$$ = new AstNode("method", $2, @2.first_line, @2.first_column, begin_node);
	}
	;

%%
