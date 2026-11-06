/*
    Chain of Responsibility
    - behavioural
    -Multiple handlers are chained together to process a request.
    - each handler decides if it can handle, if not passes to next
    - decouples sender and receiver
    - useful in logging, event handling, validation, authentication
    - no need to hardcode if-else or switch case statements
*/


class Handler {
    handle(request){
        if(this.next)
    }
}