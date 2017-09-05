/* eslint-disable */
module.exports = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://emmc.info/moda.json",
    "title": "MODA",
    "description": "Overview of a simulation",
    "type": "object",
    "required": [
      "title",
      "project",
      "fundingAgency",
      "grantNumberOrInformation",
      "projectHomePage",
      "userCase",
      "version"
    ],
    "definitions": {
      "RoMMVersion": {
        "type": "string",
        "enum": [
          "Version 2"
        ]
      },
      "physicsBasedModel": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "description": `Please identify the first model. Note these are assumed to be physics-based models unless it is specified differently.

Most modelling projects consist of a chain of models, (workflow). Here only the Physics Equations should be given and only names appearing in the content list of the Review of Materials Modelling VI should be entered. This review is available on http://ec.europa.eu/research/industrial_technologies/e-library.cfm).All models should be identified as electronic, atomistic, mesoscopic or continuum.`
          },
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
                          "title": "Symbol"
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
                          "title": "Symbol"
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
                          "title": "Symbol"
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
      },
      "databasedModel": {
        "type": "object",
        "properties": {
          "dbUserCase": {
            "type": "object",
            "title": "1. User case",
            "properties": {
              "dbUserCaseAspects": {
                "type": "string",
                "title": "1.1 Aspects of the user case to be calculated"
              },
              "material": {
                "type": "string",
                "title": "1.2 Material"
              },
              "geometry": {
                "type": "string",
                "title": "1.3 Geometry"
              },
              "timeLapse": {
                "type": "string",
                "title": "1.4 Time lapse"
              },
              "manufacturingProcessOrConditions": {
                "type": "string",
                "title": "1.5 Manufacturing process or in-service conditions"
              },
              "publications": {
                "type": "string",
                "title": "1.6 Publication on this one datamining operation"
              }
            }
          },
          "theDatabasedModel": {
            "type": "object",
            "title": "2. The databased model",
            "properties": {
              "equationType": {
                "type": "string",
                "title": "2.0.1 Equation type"
              },
              "equationName": {
                "type": "string",
                "title": "2.0.2 Equation name",
                "description": "e.g. energy minimizer"
              },
              "database": {
                "type": "string",
                "title": "2.1.1 Database",
                "description": `e.g. thermodynamic database CALPHAD
e.g. simulated data with DFT model and experimental data from AFM`
              },
              "databaseType": {
                "type": "string",
                "title": "2.1.2 Database type"
              },
              "equation": {
                "type": "object",
                "title": "2.2 Equation",
                "properties": {
                  "hypothesis": {
                    "type": "string",
                    "title": "2.2.1 Hypothesis",
                    "description": "The hypothetical relation assumed"
                  },
                  "physicalQuantities": {
                    "type": "string",
                    "title": "2.2.2 Physical quantities"
                  }
                }
              }
            }
          },
          "computationalDetails": {
            "type": "object",
            "title": "3. Computational detail of datamining operation",
            "properties": {
              "numericalOperations": {
                "type": "string",
                "title": "3.1 Numberical operations"
              },
              "softwareTool": {
                "type": "string",
                "title": "3.2 Sofware tool"
              },
              "errorMargin": {
                "type": "string",
                "title": "3.3 Margin of error"
              }
            }
          }
        }
      }
    },
    "properties": {
      "userCase": {
        "type": "string",
        "title": "User Case",
        "description": `General description of the User Case. 

Please give the properties and behaviour of the particular material, manufacturing process and/or in-service-behaviour to be simulated.
No information on the modelling should appear here. The idea is that this user-case can also be simulated by others with other models and that the results can then be compared.`,
      },
      "title": {
        "type": "string",
        "title": "Title",
      },
      "author": {
        "type": "object",
        "title": "Author",
        "required": [
          "firstName",
          "familyName",
          "email",
          "affiliation"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "familyName": {
            "type": "string",
            "title": "Last name"
          },
          "email": {
            "type": "string",
            "title": "Email address"
          },
          "affiliation": {
            "type": "string",
            "title": "Affiliation"
          }
        }
      },
      "version": {
        "type": "string",
        "title": "RoMM Version",
        "enum": ["6"],
        "enumNames": ["Version 6"]
      },
      "project": {
        "type": "string",
        "title": "Project",
        "default": "",
        "description": ""
      },
      "fundingAgency": {
        "type": "string",
        "title": "Funding agency",
        "default": "",
        "description": ""
      },
      "grantNumberOrInformation": {
        "type": "string",
        "title": "Grant number or information",
        "default": "",
        "description": ""
      },
      "projectHomePage": {
        "type": "string",
        "title": "Project home page",
        "default": "",
        "description": ""
      },
      "chainOfModels": {
        "type": "object",
        "title": "Chain of Models",
        "description": `Each physics-based model used in this simulation is to be documented in four chapters:
1. Aspect of the User Case or system simulated with this model
2. Model: Please make sure the notions Physics Equation and Materials Relation are properly understood. 
Tightly coupled models can be written up collectively in one set of four tables. To solve tightly coupled PE one matrix is set up and solved in one go.
For continuum models the PE is often the conservation equations coded up in bought software packages. 
Often the MR is established by the modeller.
3. Computational aspects include also a documentation of how the user case specifications are translated into computer language.
4. Post processing documents how the raw output of one simulation is processed into input for the next simulation. This information given under 4.1 in the first model will be the same as the "simulated input" information under 2.4 for the next model. This is the essence of model inter-operability!
5. Pre-processing before the first model can be depicted in pink as it is considered to be part of the user-case.


Each data-based model in this simulation is to be documented in three chapters:
1. Aspect of the User Case or system simulated with this data-based model 
2. Data-based Model
3. Computational detail of the datamining operation`,
        "properties": {
          "physicsBasedModels": {
            "type": "array",
            "title": "Physics-based Models",
            "items": {
              "$ref": "#/definitions/physicsBasedModel"
            },
          },
          "databasedModels": {
            "type": "array",
            "title": "Databased Models [work in progress]",
            "description": "Each data-based model in this simulation is to be documented in three chapters:\
1. Aspect of the User Case or system simulated with this data-based model\
2. Data-based Model\
3. Computational detail of the datamining operation",
            "items": {
              "$ref": "#/definitions/databasedModel"
            }
          }
        }
      },
      "publications": {
        "type": "string",
        "title": "Publication - peer reviewing the data",
        "description": `Please give the publication which documents the data of this ONE simulation.

This article should ensure the quality of this data set (and not only the quality of the models).`
      },
      "accessConditions": {
        "type": "string",
        "title": "Access conditions",
        "description": `Please list whether the model and/or data are free, commercial or open source. Please list the owner and the name of the software or database (include a web link if available).`
      },
      "workflowRationale": {
        "type": "string",
        "title": "Textual description of the Workflow and its rationale",
        "description": `Please give a textual rationale of why you as a modeller have chosen these models and this workflow, knowing other modellers would simulate the same end-user case differently.

This should include the reason why a particular aspect of the user case is to be simulated with a particular model.`
      },
      "creationDate": {
        "type": "string",
        "format": "date-time",
        "title": "Creation date"
      },
      "modificationDate": {
        "type": "string",
        "format": "date-time",
        "title": "Modification date"
      }
    }
  }
}
