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

/** @type {{fn: Function, priority: boolean, allowBeginningWith: boolean}}
 * fn : function to execute operation
 * allowBeginningWith: wether or not the interpreter should tolerate it at the start
 */
const Operations = {
  "-": {
    fn: (a, b) => a - b,
    priority: false,
    allowBeginningWith: true,
  },
  "+": {
    fn: (a, b) => a + b,
    priority: false,
    allowBeginningWith: true,
  },
  "*": {
    fn: (a, b) => a * b,
    priority: true,
    allowBeginningWith: false,
  },
  "/": {
    fn: (a, b) => a / b,
    priority: true,
    allowBeginningWith: false,
  },
};

/** @type {Regex}
 *  regex expression that gets the next digit
 */
const NextNumberRegex = /\d+/;

/**
 * @param {string} str the string to get the next number.
 * @return {[exists: boolean, symbolContent: string, remainingStr: string]}
 */
function getNextNumber(str) {
  const nextNumber = str.match(NextNumberRegex);
  const isNext = nextNumber ? str.startsWith(nextNumber) : false;
  const remainingStr = isNext ? str.slice(nextNumber.length) : str;
  return [isNext, nextNumber[0], remainingStr];
}

/**
 * @param {string} str the string to get the next operation.
 * @return {[exists: boolean, symbolContent: string, remainingStr: string]}
 */
function getNextOperation(str) {
  const nextOp = Object.keys(Operations).find((op) => str.startsWith(op));
  const remainingStr = nextOp ? str.slice(nextOp.length) : str;
  return [!!nextOp, Operations[nextOp], remainingStr];
}

/**
 * @param {string} str the string to get the next expression (between parenthesis).
 * @return {[exists: boolean, symbolContent: string, remainingStr: string]}
 */
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

/** @type {Object.<string, number>}
 * Enum of the types of symbol
 */
const SymbolTypes = {
  NUMBER: "number",
  OPERATION: "operation",
  EXPRESSION: "expression",
};

/** @type {{fn: Function, type: string}}
 * Handlers to parse the equation
 */
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

/**
 * Node is the class to handle the chunks of the equation.
 *
 * @class Node
 */
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
    this._innerValue = compile(val);
  }

  get innerValue() {
    if (typeof this._innerValue == "number") {
      return this._innerValue;
    }
    return execute(this._innerValue);
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

/**
 *
 * Parse the next sumbol
 * @param {string} str
 * @return {[type: SymbolType, content: string|Symbol, remainingStr: string]}
 */
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

/**
 * Compiles str into nodes for execution.
 *
 * @param {string} str the equation to compile.
 * @return {Array<Node>} nodes to execute.
 */
function compile(str) {
  const nodes = [];
  while (true) {
    let currentSymbol = ParseNext(str);
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
        if (!nodes.length && !symbolContent.allowBeginningWith) {
          throw `cannot start with a multiplication`;
        } else if (!nodes.length) {
          nodes.push(new Node("0"));
        }
        nodes[nodes.length - 1].nextOp = symbolContent;
        break;
      default:
        throw `unknown symbole type ${symboleType}`;
    }
    str = remainingStr;
  }
}

/**
 * Executes the ops that OpSelector dictates.
 *
 * @param {Array<Node>} nodes to execute
 * @param {Function} OpSelector callback to prioritize some operation
 * @return {number}
 */
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

/**
 * Executes the nodes respecting the mathematical order.
 *
 * @param {Array<Node>} nodes to execute
 * @return {number} result
 */
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

/**
 * @param {string} mathematical equatin
 * @return {number} result
 */
function Calculator(string) {
  if (!string) {
    return 0;
  }
  console.time(`total ${string}`);
  console.time(`compiling ${string}`);
  const nodes = compile(string);
  console.timeEnd(`compiling ${string}`);
  console.time(`executing ${string}`);
  const ret = execute(nodes);
  console.timeEnd(`executing ${string}`);
  console.timeEnd(`total ${string}`);
  return ret;
}

/**
 *
 * Pretty prints equation and results.
 *
 * @param {string} equation
 */
function PrettyPrint(equation) {
  console.log(equation, "=", Calculator(equation));
}

// KEEP THIS FUNCTION CALL HERE
PrettyPrint("");
PrettyPrint("1");
PrettyPrint("-2");
PrettyPrint("6/3-1");
PrettyPrint("-6/3-1");
PrettyPrint("6*(4/2)+3*1");
PrettyPrint("6*((4)(3)/2)+3*1");
