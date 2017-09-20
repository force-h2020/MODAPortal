import React from 'react'
import { PropTypes } from 'prop-types'

//import Dracula from 'graphdracula'
import Graph from 'react-graph-vis'


/*class WorkflowDiagram_dracula extends React.Component {
  constructor(props) {
    super(props)
    
  }

  createModaGraph(graph) {
    console.log(this.props.moda)
    if (!(this.props.moda && this.props.moda.chainOfModels && this.props.moda.chainOfModels.physicsBasedModels)) {
      return
    }
    const models = this.props.moda.chainOfModels.physicsBasedModels
    graph.addEdge('First', 'Second', { directed : true })
    models.forEach(m => {
      console.log(m)
      graph.addEdge(m.title, 'First', { directed : true })
    })
  }

  componentDidMount() {
    const Graph = Dracula.Graph
    const Renderer = Dracula.Renderer.Raphael
    const Layout = Dracula.Layout.Spring

    const graph = new Graph()

    this.createModaGraph(graph)

    const layout = new Layout(graph)
    const renderer = new Renderer('#canvas', graph, 400, 300)
    renderer.draw()
  }

  render() {
    return <div id='canvas' />
  }
}
*/

class WorkflowDiagram extends React.Component {

  render() {
    const graph = {
      nodes: [
        ],
      edges: [
        ]
    };

    if (this.props.moda && this.props.moda.chainOfModels) {
      const models = this.props.moda.chainOfModels.physicsBasedModels
      const modelsMap = {}
      models.map(item => modelsMap[item.title] = item)
      models.forEach((currentValue, index, array) => {
        graph.nodes.push({id: index, label: currentValue.title})

        if (currentValue.genericPhysics && currentValue.genericPhysics.simulatedInput) {
          const input = currentValue.genericPhysics.simulatedInput
          const fromIndex = models.findIndex(item => item.title === modelsMap[input].title)
          graph.edges.push({from: fromIndex, to: index})
        }
      })
    }

    var options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        }
    };

    var events = {
        select: function(event) {
            //var { nodes, edges } = event;
        }
    }

    return (
      <div className="panel panel-default" style={{marginTop: '10px'}}>
        <div className="panel-heading">
          <h3 className="panel-title">Simulation Workflow</h3>
        </div>
        <div className="panel-body">
          <Graph graph={graph} options={options} events={events} />
        </div>
      </div>
    )
  }
}

WorkflowDiagram.propTypes = {
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
}

export {
  WorkflowDiagram
}