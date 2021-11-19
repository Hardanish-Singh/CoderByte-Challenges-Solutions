/****************************************************************
 *             CODERBYTE CALCULATOR CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Calculator(str) take the str parameter     *
 * being passed and evaluate the mathematical expression within *
 * in. For example, if str were "2+(3-1)*3" the output should   *
 * be 8. Another example: if str were "(2-0)(6/2)" the output   *
 * should be 6. There can be parenthesis within the string so   *
 * you must evaluate it properly according to the rules of      *
 * arithmetic.                                                  *
 * The string will contain the operators: +, -, /, *, (, and ). *
 * If you have a string like this: #/#*# or #+#(#)/#, then      *
 * evaluate from left to right. So divide then multiply, and    *
 * for the second one multiply, divide, then add.               *
 * The evaluations will be such that there will not be any      *
 * decimal operations, so you do not need to account for        *
 * rounding and whatnot.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "6*(4/2)+3*1"                                       *
 * Output 1: 15                                                 *
 *                                                              *
 * Input 2: "6/3-1"                                             *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

// Unsecure alternative.
//function Calculator(string) {
//    let evaluateExpression = new String("");
//    let splittedString = string.split("");
//    let flag = false;
//    for(let i=0; i<splittedString.length; i++){
//        if(i!=0 && i!=splittedString.length-1) {
//            if(splittedString[i] == ')' && (splittedString[i+1] == Number(splittedString[i+1]) || splittedString[i+1] == '(') && flag == false) {
//                evaluateExpression += splittedString[i] + "*";
//                flag = true;
//            }
//            else if(splittedString[i] == '(' && (splittedString[i-1] == Number(splittedString[i-1]) || splittedString[i-1] == ')') && flag == false ) {
//                evaluateExpression += "*" + splittedString[i];
//                flag = true;
//            }
//            else evaluateExpression += splittedString[i];
//        }
//        else evaluateExpression += splittedString[i];
//    }
//    return eval(evaluateExpression);
//}

/** @type {*} */
const Operations = {
  "-": {
    fn: (a, b) => a - b,
    priority: false,
    allowBegingWith: true,
  },
  "+": {
    fn: (a, b) => a + b,
    priority: false,
    allowBegingWith: true,
  },
  "*": {
    fn: (a, b) => a * b,
    priority: true,
    allowBegingWith: false,
  },
  "/": {
    fn: (a, b) => a / b,
    priority: true,
    allowBegingWith: false,
  },
};

const NextNumberRegex = /\d+/;
function getNextNumber(str) {
  const nextNumber = str.match(NextNumberRegex);
  const isNext = nextNumber ? str.startsWith(nextNumber) : false;
  const remainingStr = isNext ? str.slice(nextNumber.length) : str;
  return [isNext, nextNumber[0], remainingStr];
}

function getNextOperation(str) {
  const nextOp = Object.keys(Operations).find((op) => str.startsWith(op));
  const remainingStr = nextOp ? str.slice(nextOp.length) : str;
  return [!!nextOp, Operations[nextOp], remainingStr];
}

function getNextExpression(str) {
  const firstChar = str ? str[0] : null;
  str = str.slice(1);
  if (firstChar == "(") {
    let buffer = [];
    let openingsCount = 1;
    let closingCount = 0;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentChar == "(") {
        openingsCount += 1;
      } else if (currentChar == ")") {
        closingCount += 1;
      }
      if (openingsCount == closingCount) {
        return [true, buffer.join(""), str.slice(buffer.length + 1)];
      }
      buffer.push(currentChar);
    }
  }
  return [false, null, str];
}

const SymbolTypes = {
  NUMBER: "number",
  OPERATION: "operation",
  EXPRESSION: "expression",
};

const Handlers = [
  {
    fn: getNextNumber,
    type: SymbolTypes.NUMBER,
  },
  {
    fn: getNextOperation,
    type: SymbolTypes.OPERATION,
  },
  {
    fn: getNextExpression,
    type: SymbolTypes.EXPRESSION,
  },
];

class Node {
  constructor(innerValue) {
    // enable for debugging
    this.constructorParam = innerValue;
    this.innerValue = innerValue;
    this._nextOp = null;
  }

  get innerValue() {
    if (!this._innerValue) {
      throw "Empty inner value";
    }
    return this._innerValue;
  }

  set innerValue(val) {
    if (this._innerValue) {
      throw "innerValue already exists";
    }
    const nextValNumber = val.match(NextNumberRegex);
    if (nextValNumber.length == val.length) {
      this._innerValue = parseInt(val);
      return;
    }
    const parsedInnerValue = new Parser(val).nodes;
    this._innerValue = execute(parsedInnerValue);
  }

  get innerValue() {
    return this._innerValue;
  }

  set nextOp(val) {
    if (this._nextOp) {
      throw "nextOp already exists";
    }
    this._nextOp = val;
  }

  get nextOp() {
    return this._nextOp;
  }
}

function ParseNext(str) {
  if (!str) {
    return null;
  }
  for (let i = 0; i < Handlers.length; i++) {
    const handler = Handlers[i];
    const [exists, symbolContent, remainingStr] = handler.fn(str);
    if (exists) {
      return [handler.type, symbolContent, remainingStr];
    }
  }
  throw `Something went wrong with ${str}`;
}

class Parser {
  constructor(str) {
    this.string = str;
    this.nodes = this.compile();
  }

  compile() {
    const nodes = [];
    let currentStr = this.string;
    while (true) {
      let currentSymbol = ParseNext(currentStr);
      if (!currentSymbol) {
        return nodes;
      }
      const [symboleType, symbolContent, remainingStr] = currentSymbol;
      switch (symboleType) {
        case SymbolTypes.EXPRESSION:
        case SymbolTypes.NUMBER:
          nodes.push(new Node(symbolContent));
          break;
        case SymbolTypes.OPERATION:
          // set last nodes with operation
          if (!nodes.length && !symbolContent.allowBegingWith) {
            throw `cannot start with a multiplication`;
          } else if (!nodes.length) {
            nodes.push(new Node("0"));
          }
          nodes[nodes.length - 1].nextOp = symbolContent;
          break;
        default:
          throw `unknown symbole type ${symboleType}`;
      }
      currentStr = remainingStr;
    }
  }
}

function executeOps(nodes, OpSelector) {
  for (let i = 0; i < nodes.length - 1; i++) {
    const { nextOp, innerValue } = nodes[i];
    if (OpSelector(nextOp)) {
      const nextNode = nodes[i + 1];
      nodes[i] = {
        nextOp: nextNode.nextOp,
        // default operation is multiplication
        innerValue: nextOp
          ? nextOp.fn(innerValue, nextNode.innerValue)
          : innerValue * nextNode.innerValue,
      };
      nodes.splice(i + 1, 1);
    }
  }
  return nodes;
}

function execute(nodes) {
  const prioritySelector = (nextOp) => (nextOp ? nextOp.priority : false);
  while (nodes.find((n) => prioritySelector(n.nextOp))) {
    nodes = executeOps(nodes, prioritySelector);
  }
  while (nodes.length > 1) {
    nodes = executeOps(nodes, () => true);
  }
  return nodes[0].innerValue;
}

function Calculator(string) {
  const nodes = new Parser(string).nodes;
  return execute(nodes);
}

function PrettyPrint(equation) {
  console.log(equation, "=", Calculator(equation));
}

// KEEP THIS FUNCTION CALL HERE
PrettyPrint("6*(4/2)+3*1");
PrettyPrint("6*((4)(3)/2)+3*1");
PrettyPrint("6/3-1");
PrettyPrint("-6/3-1");
