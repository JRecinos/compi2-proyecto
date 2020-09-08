%{
import {NodoMM} from "../tree/NodoMM";
import {Expresion} from "../tree/Expresion";
import {Relacional} from "../tree/Relacional";
import {Imprimir} from "../tree/Imprimir";

  /*
  if(hash["token"] == "INVALID"){
              window.errores.push(new plantillaError('Lexema: ' + hash["text"]
                  + ', no reconocido.' ,hash["loc"]["last_line"],hash["loc"]["last_column"],"Lexico"));
          }else{
              window.errores.push(new plantillaError('Error en: ' + hash["text"]
                  + ', se esperaba '+ hash["expected"] + '.',hash["loc"]["last_line"],hash["loc"]["last_column"],"Sintactico"));
          }

   */
%}


%lex
%options ranges

%s                                  comment
%%

\s+                                 /* skip whitespace */;
\/\/[^\n]*                          /*skip comment*/;
"/*"                                this.begin('comment');
<comment>"*/"                       this.popState();
<comment>.                          /* skip comment content*/



\s+                                 /* skip whitespace */

[0-9]+("."[0-9]+)                   return 'DECIMAL';
['][^\n][']                         return 'CARACTER';
("0"|[0-9]+)                        return 'ENTERO';


"%"                                 return '%';
"++"                                return 'masmas';
"**"                                return 'potencia';
"--"                                return 'menosmenos';
"=="                                return 'igualigual';
"!="                                return 'diferente';
">="                                return 'mayoroigual';
"<="                                return 'menoroigual';
">"                                 return 'mayor';
"<"                                 return 'menor';
"?"                                 return 'pregunta';
":"                                 return 'dospuntos';
"&&"                                return 'and';
"||"                                return 'or';
"="                                 return 'igual';
"!"                                 return 'not';
"-"                                 return '-';
"+"                                 return '+';
"%"                                 return '%';
"*"                                 return '*';
"/"                                 return '/';
"("                                 return 'parentesisabre';
")"                                 return 'parentesiscierra';
"{"                                 return 'llaveabre';
"}"                                 return 'llavecierra';
"["                                 return 'corcheteabre';
"]"                                 return 'corchetecierra';
";"                                 return 'puntoycoma';
","                                 return 'coma';
"."                                 return 'punto';



"if"                                return 'if';
"else"                              return 'else';
"console"                           return 'console';
"log"                               return 'log';
"while"                             return 'while';
"do"                                return 'do';
"return"                            return 'return';
"continue"                          return 'continue';
"break"                             return 'break';
"default"                           return 'default';
"case"                              return 'case';
"switch"                            return 'switch';
"true"                              return 'verdadero';
"false"                             return 'falso';
"int"                               return 'int';
"double"                            return 'double';
"String"                            return 'String';
"boolean"                           return 'boolean';
"char"                              return 'char';
"final"                             return 'final';
"public"                            return 'public';
"protected"                         return 'protected';
"private"                           return 'private';
"void"                              return 'void';
"@Override"                         return 'override';
"class"                             return 'class';
"this"                              return 'THIS';
"static"                            return 'static';
"for"                               return 'for';
"new"                               return 'new';
"length"                            return 'length';
"null"                              return 'null';
"toCharArray"                       return 'tochararray';
"toLowerCase"                       return 'tolowercase';
"toUpperCase"                       return 'touppercase';
"import"                            return 'import';
"extends"                           return 'extends';
"graph"                             return 'graph';
"try"                               return 'try';
"catch"                             return 'catch';
"str"                               return 'str';
"toDouble"                          return 'todouble';
"toInt"                             return 'toint';
"toChar"                            return 'tochar';
"instanceof"                        return 'instanceof';

"\""(("\\\"")|[^"])*"\""            yytext = yytext.substr(1,yyleng-2);     return 'CADENA';


("ñ"|"Ñ"|"_"|[a-zA-Z])("ñ"|"Ñ"|[a-zA-Z]|[0-9]|"_")* return 'IDENTIFICADOR';
<<EOF>>                             return 'EOF';
.                                   return 'INVALID';

/lex

/* operator associations and precedence */


%right  'igual'
%right  'pregunta' 'dospuntos'
%left   'or'
%left   'and'
%left   'xor'
%left   'igualigual' 'diferente'
%left   'menor' 'mayor' 'mayoroigual' 'menoroigual' 'instanceof'
%left   'igualigual' 'diferente'
%left   '+' '-'
%left   '*' '/' '%'
%left   '%' 'potencia' 
%right  'new' 'int' 'String' 'boolean' 'char' 'double'

%right  'not'
%left   UMINUS
%right  'masmas' 'menosmenos'
%nonassoc 'masmas' 'menosmenos'
%left   'parentesisabre' 'parentesiscierra'
%left   'punto'
%left  'corcheteabre' 'corchetecierra'

%start INICIO
%error-verbose
%%

INICIO: IMPRIMIR EOF
        {
            return $1;
        };


IMPRIMIR:
    'console' 'punto' 'log' 'parentesisabre' REL 'parentesiscierra' 'puntoycoma'
        {
            $$ = new Imprimir ("imprimir","PRINT",@1, [$5]);
        };

REL:
    REL 'mayor' REL
        {
            $$ = new Relacional ("MAYOR", ">", @1, [$1, $3]);
        }
    | REL 'menor' REL
        {
            $$ = new Relacional ("MENOR", "<", @1, [$1, $3]);
        }
    | REL 'menoroigual' REL
        {
            $$ = new Relacional ("MENOROIGUAL", "<=", @1, [$1, $3]);
        }
    | REL 'mayoroigual' REL
        {
            $$ = new Relacional ("MAYOROIGUAL", ">=", @1, [$1, $3]);
        }
    | REL 'igualigual' REL
        {
            $$ = new Relacional ("IGUALIGUAL", "==", @1, [$1, $3]);
        }
    | REL 'diferente' REL
        {
            $$ = new Relacional ("DIFERENTE", "!=", @1, [$1, $3]);
        }
    | EXP
        {
            $$ = $1;
        };

EXP:
    EXP '+' EXP
        {
            $$ = new Expresion ("MAS", "+", @1, [$1,$3] );
        }
    | EXP '-' EXP
        {
            $$ = new Expresion ("MENOS", "-", @1, [$1,$3] );
        }
    | EXP '*' EXP
        {
            $$ = new Expresion ("POR", "*", @1, [$1,$3] );
        }
    | EXP 'potencia' EXP
        {
            $$ = new Expresion ("POTENCIA", "**", @1, [$1,$3] );
        }
    | EXP '/' EXP
        {
            $$ = new Expresion ("DIV", "/", @1, [$1,$3] );
        }
    | EXP '%' EXP
        {
            $$ = new Expresion ("MODULO", "%", @1, [$1,$3] );
        }
    | ENTERO
        {
            $$ = new Expresion ("NUMERICO", yytext, @1, [] );
        }
    | DECIMAL
        {
            $$ = new Expresion ("NUMERICO", yytext, @1, [] );
        }
    | '-' e %prec UMINUS
        {
            $$ = new Expresion ("NEGADO", "-", @1, [$2] );
        }
    | CADENA
        {
            $$ = new Expresion ("STRING", ((yytext.split("\\\"").join("\"")).split("\\t").join("\n")).split("\\n").join("\n").split("\\\\").join("\\").split("\\r").join("\r"), @1, [] );
        }
    | 'verdadero'
        {
            $$ = new Expresion ("BOOLEAN", "true", @1, [] );
        }
    | 'falso'
        {
            $$ = new Expresion ("BOOLEAN", "false", @1, [] );
        }
    | 'parentesisabre' EXP 'parentesiscierra'
        {
            $$ = $2;
        };

%%


parser.treeparser  = {
 raiz : null
};

 parser.error ={
  error:[]

};