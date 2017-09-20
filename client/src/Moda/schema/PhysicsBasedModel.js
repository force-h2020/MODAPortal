export default {
  "type": "object",
  "properties": {

    "title": {
      "type": "string",
      "title": "Title",
    },

/*****************************
User Case Aspects
******************************/

    "userCaseAspects": {
      "type": "object",
      "title": "1. Aspect of the user-case/system to be simulated",
      "description": `Describe the aspects of the User Case textually. 

No modelling information should appear in this box. This case could also be simulated by other models in a benchmarking operation!
The information in this chapter can be end-user information, measured data, library data etc. It will appear in the pink circle of your workflow picture. 
Simulated input which is calculated by another model should not be included (but this input is listed in chapter 2.4) 

Also the result of pre-processing necessary to translate the user case specifications to values for the physics variables of the entities can be documented here. `,
      "properties": {
        "aspectsOfInterest": {
          "type": "string",
          "title": "1.1 Aspects of the user case to be simulated"
        },
        "material": {
          "type": "string",
          "title": "1.2 Material",
          "description": "Chemical composition, …",
        },
        "geometry": {
          "type": "string",
          "title": "1.3 Geometry",
          "description": `Size, form, picture of the system (if applicable) 

Note that computational choices like simulation boxes are to be documented in chapter 3.`
        },
        "timeLapse": {
          "type": "string",
          "title": "1.4 Time lapse",
          "description": `Duration of the User Case to be simulated.

This is the duration of the situation to be simulated. This is not the same as the computational times to be given in chapter 3.`
        },
        "manufacturingProcessOrConditions": {
          "type": "string",
          "title": "1.5 Manufacturing process or in-service conditions",
          "description": `If relevant, please list the conditions to be simulated (if applicable).

E.g. heated walls, external pressures and bending forces. 
Please note that these might appear as terms in the PE or as boundary and initial conditions, and this will be documented in the relevant chapters.`
        },
        "publications": {
          "type": "string",
          "title": "1.6 Publication on this data",
          "description": `Publication documenting the simulation with this single model and its data (if available and if not already included in the overall publication). `
        }
      }
    },

/*****************************
Generic Physics
******************************/

    "genericPhysics": {
      "type": "object",
      "title": "2. Generic physics of the model equation",
      "required": [
        "romm_pe",
        "modelEntity"
      ],
      "properties": {
        "romm_pe": {
          "type": "string",
          "title": "Physics Equation According to the RoMM",
          "description": `Model type and name chosen from RoMM content list (the PE). 

This PE and only this will appear in the blue circle of your workflow picture. Please do not insert any other text although an indication of the MR is allowed.`
        },
        "modelEntity": {
          "type": "string",
          "title": "2.1 Model entity",
          "description": `The entity in this materials model is <finite volumes, grains, atoms, or electrons> `,
          "enum": [
            "Electronic",
            "Atoms",
            "Grins/beads",
            "Continiuum"
          ]
        },
        "modelPE": {
          "type": "object",
          "title": "2.2 Model physics/chemistery equation",
          "description": "Enter physics and chemistery equations below.",
          "properties": {
            "physicsEquations": {
              "type": "array",
              "title": "2.2.1 Equation",
              "description": `Name, description and mathematical form of the PE 

In case of tightly coupled PEs set up as one matrix which is solved in one go, more than one PE can appear. `,
              "items": {
                "type": "object",
                "properties": {
                  "equation": {
                    "type": "string",
                    "title": "Physics equation",
                  },
                  "description": {
                    "type": "string",
                    "title": "Description",
                  },
                }
              },
            },
            "physicalQuantities": {
              "type": "array",
              "title": "2.2.2 Physical quantities",
              "description": `Please name the physics quantities in the PE, these are parameters (constants, matrices) and variables that appear in the PE, like wave function, Hamiltonian, spin, velocity, external force.`,
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "title": "Name"
                  },
                  "symbol": {
                    "type": "string",
                    "title": "Equation"
                  },
                  "description": {
                    "type": "string",
                    "title": "Description"
                  }
                }
              }
            },
          },
        },
        "materialRelations": {
          "type": "object",
          "title": "2.3 Material relations",
          "description": "Enter material relations and their descriptors.",
          "properties": {
            "relations": {
              "type": "array",
              "title": "2.3.1 Relation",
              "description": `Please, give the name of the Material Relation and which PE it completes.`,
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "title": "Name"
                  },
                  "symbol": {
                    "type": "string",
                    "title": "Equation"
                  },
                  "description": {
                    "type": "string",
                    "title": "Description"
                  }
                }
              },
            },
            "descriptors": {
              "type": "array",
              "title": "2.3.2 Physical quantities/descriptors for each MR",
              "description": `Please give the name of the physics quantities, parameters (constants, matrices) and variables that appear in the MR(s)`,
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "title": "Name"
                  },
                  "symbol": {
                    "type": "string",
                    "title": "Equation"
                  },
                  "description": {
                    "type": "string",
                    "title": "Description"
                  }
                }
              }
            }
          }
        },
        "simulatedInput": {
          "type": "string",
          "title": "2.4 Simulated input",
          "description": `lease document the simulated input and with which model it is calculated.

This box documents the interoperability of the models in case of sequential or iterative model workflows. Simulated output of the one model is input for the next model.  Thus what you enter here in 2.4 will also appear in 4.1 of the model that calculated this input. 

If you do simulations in isolation, then this box will remain empty. 

Note that all measured input is documented in chapter 1 “User Case”.`,
          "default": "",
          "enum": []
        }
      }
    },

/*****************************
Solver Specs
******************************/

    "solverSpecs": {
      "type": "object",
      "title": "3. Solver and computational translation of the specifications",
      "properties": {
        "numericalSolver": {
          "type": "string",
          "title": "3.1 Numerical solver",
          "description": `Please give name and type of the solver.
E.g. Monte Carlo, SPH, FE, …iterative, multi-grid, adaptive,…`
        },
        "softwareTool": {
          "type": "object",
          "title": "3.2 Software Tool",
          "description": `Please give the name of the code and if this is your own code, please specify if it can be shared with an eventual link to a website/publication.`,
          "properties": {
            "name": {
              "type": "string",
              "title": "Name of the tool"
            },
            "version": {
              "type": "string",
              "title": "Version of the tool"
            },
            "website": {
              "type": "string",
              "title": "Website of the tool"
            }
          }
        },
        "systemOfUnits": {
          "type": "string",
          "title": "3.3 System of units"
        },
        "timeStep": {
          "type": "string",
          "title": "3.4 Time step",
          "description": `If applicable, please give the time step used in the solving operations.
This is the numerical time step and this is not the same as the time lapse of the case to be simulated (see 1.4)`
        },
        "timeStepUnit": {
          "type": "string",
          "title": "3.5 Time step unit"
        },
        "computationalRepresentation": {
          "type": "object",
          "title": "3.6 Computational representation (CR)",
          "description": `Computational representation of the Physics Equation, Materials Relation and material.

There is no need to repeat User Case info. “Computational” means that this only needs to be filled in when your computational solver represents the material, properties, equation variables, in a specific way.`,
          "properties": {
            "physicsEquationCR": {
              "type": "string",
              "title": "3.6.1 Physics equation CR"
            },
            "materialRelationsCR": {
              "type": "string",
              "title": "3.6.2 Material relations CR"
            },
            "materialCR": {
              "type": "string",
              "title": "3.6.3 Material CR"
            }
          }
        },
        "computationalBoundaryConditions": {
          "type": "string",
          "title": "3.7 Computational boundary conditions",
          "description": `If applicable.

Please note that these can be translations of the physical boundary conditions set in the User Case or they can be pure computational like e.g. a unit cell with mirror b.c. to simulate an infinite domain.`
        },
        "additionalSolverParameters": {
          "type": "string",
          "title": "3.8 Additional solver parameters",
          "description": `Please specify pure internal numerical solver details (if applicable), like
specific tolerances,
cut-off, convergence criteria
integrator options`
        }
      }
    },

/*****************************
Post Processing
******************************/

    "postProcessing": {
      "type": "object",
      "title": "4. Post processing",
      "description": `The “raw output” calculated by the model consists per definition of values for the physics variable in the PE(s). This variable is already specified in 2.2 and this raw output will appear in your dark green circle in the workflow picture. 

This raw output is often processed 
to calculate values for physics variables for different entities of the next model. E.g. the output can be homogenised for larger volumes 
in the form of a MR for the next model
into a  Descriptor Rule that is the final output of the total simulation. 
This processed output will appear in your light green circle in the workflow picture and also in 2.4 of the next model (if there is one).

The methodology (often including physics) used to do this post processing calculation is to be documented in 4.2.`,
      "properties": {
        "processedOutput": {
          "type": "string",
          "title": "4.1 Processed Output",
          "description": `Please specify the output obtained by the post processing.

If applicable then specify the entity in the next model in the chain for which this output is calculated: electrons, atoms, grains, larger/smaller finite volumes.

In case of homogenisation, please specify the averaging volumes.

Output can be calculated values for parameters, new MR and descriptor rules (data-based models).`
        },
        "methodologies": {
          "type": "string",
          "title": "4.2 Methodologies",
          "description": `Please describe the mathematics and/or physics used in this post-processing calculation.  

In homogenisation this is volume averaging. But also physics equations can be used to derive e.g. thermodynamics quantities or optical quantities from Quantum Mechanics raw output.`,
        },
        "errorMargin": {
          "type": "string",
          "title": "4.3 Margin of Error",
          "description": `Please specify the margin of error (accuracy in percentages) of the property calculated and explain the reasons to an industrial end-user.`,
        }
      }
    }
  }
}