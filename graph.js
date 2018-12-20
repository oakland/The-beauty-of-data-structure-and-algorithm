var graph = {
    you: ['alice', 'bob', 'claire'],
      alice: ['peggy'],
        bob: ['anuj', 'peggy'],
          claire: ['thom', 'jonny']
};

function findSomebody(graph, sb) {
    var queue = graph.you;
    var searched = {};
      while(queue.length) {
            var person = queue[0];
                console.log(person);
                if(!searched[person]) {
                  searched[person] = null;
                    if (person === sb) {
                            console.log(`find ${sb}!!!`)
                                    return;
                                } else {
                                        queue = queue.concat(graph[person]);
                                        queue.splice(0, 1);
                                            }
                      }
                }
        console.log(`no ${sb} is found`);
          return -1;
}

findSomebody(graph, 'peggy');
