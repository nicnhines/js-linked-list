/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
    let head = null;
    let tail = null;

    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert: insert
    }

    function getHead() {

        return head;
    };

    function getTail() {
        return tail;
    };

    function add(value) {
        let newNode = {
            value: value,
            next: null
        };
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        return tail;
    };


    function remove(num) {
        let previousNode = get(num - 1);
        let nextNode = get(num + 1);
        if (nextNode === false) {
            previousNode.next = null;
            tail = previousNode;
        } if(num === 0){
            head = nextNode;
        } if(get(num) === false){
            return false;
        }
        previousNode.next = nextNode;
    };

    function get(num) {
     let targetNode = head;
     for(let i = 0; i < num; i++) {
         if(targetNode.next === null) {
             return false;
         }
         targetNode = targetNode.next;
     }
     return targetNode;
    };

    function insert(value, index) {
        let newNode = {
            value: value,
            next: null
        };
        let previousNode = get(index - 1);
        let target = get(index);
        if (index === 0) {
            newNode.next = head;
            head = newNode;
        } else if (index < 0 || get(index) === false) {
                return false;
            } else {
                newNode.next = get(index);
                previousNode.next = newNode;
            }
        }


}