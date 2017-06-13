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
            "title": "Title"
          },
          "cuds_type": {
            "type": "string",
            "title": "Physics Equation According to the RoMM"
          },
          "userCaseAspects": {
            "type": "object",
            "title": "1. Aspect of the user-case/system to be simulated",
            "properties": {
              "aspectsOfInterest": {
                "type": "string",
                "title": "1.1 Aspects of the user case to be simulated"
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
                "title": "1.6 Publication on this data"
              }
            }
          },
          "genericPhysics": {
            "type": "object",
            "title": "2. Generic physics of the model equation",
            "properties": {
              "modelType": {
                "type": "string",
                "title": "2.0.1 Model type"
              },
              "modelName": {
                "type": "string",
                "title": "2.0.2 Model name"
              },
              "modelEntity": {
                "type": "string",
                "title": "2.1 Model entity"
              },
              "modelPE": {
                "type": "object",
                "title": "2.2 Model physics/chemistery equation",
                "description": "Enter physics and chemistery equations below.",
                "properties": {
                  "physicsEquations": {
                    "type": "array",
                    "title": "2.2.1 Equation",
                    "items": {
                      "type": "object",
                      "properties": {
                        "equation": {
                          "type": "string",
                          "title": "Equation",
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
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "title": "Name/symbol"
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
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "title": "Name/symbol"
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
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "title": "Name/symbol"
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
                "title": "2.4 Simulated input"
              }
            }
          },
          "solverSpecs": {
            "type": "object",
            "title": "3. Solver and computational translation of the specifications",
            "properties": {
              "numbericalSolver": {
                "type": "string",
                "title": "3.1 Numberical solver"
              },
              "softwareTool": {
                "type": "string",
                "title": "3.2 Software Tool"
              },
              "timeStep": {
                "type": "string",
                "title": "3.3 Time step"
              },
              "computationalRepresentation": {
                "type": "object",
                "title": "3.4 Computational representation (CR)",
                "properties": {
                  "physicsEquationCR": {
                    "type": "string",
                    "title": "3.4.1 Physics equation CR"
                  },
                  "materialRelationsCR": {
                    "type": "string",
                    "title": "3.4.2 Material relations CR"
                  },
                  "materialCR": {
                    "type": "string",
                    "title": "3.4.3 Material CR"
                  }
                }
              },
              "computationalBoundaryConditions": {
                "type": "string",
                "title": "3.5 Computational boundary conditions"
              },
              "additionalSolverParameters": {
                "type": "string",
                "title": "3.6 Additional solver parameters"
              }
            }
          },
          "postProcessing": {
            "type": "object",
            "title": "4. Post processing",
            "properties": {
              "processedOutput": {
                "type": "string",
                "title": "4.1 Processed Output"
              },
              "methodologies": {
                "type": "string",
                "title": "4.2 Methodologies"
              },
              "errorMargin": {
                "type": "string",
                "title": "4.3 Margin of Error"
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
                "title": "2.0.2 Equation name"
              },
              "database": {
                "type": "string",
                "title": "2.1.1 Database"
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
                    "title": "2.2.1 Hypothesis"
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
            "title": "Family name"
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
        "title": "FundingAgency",
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
        "description": "Each physics-based model used in this simulation is to be documented in four chapters:\
1. Aspect of the User Case or system simulated with this model\
2. Model: Please make sure the notions Physics Equation and Materials Relation are properly\
understood.\
Tightly coupled models can be written up collectively in one set of four tables. To\
solve tightly coupled PE one matrix is set up and solved in one go.\
For continuum models the PE is often the conservation equations coded up in\
bought software packages.\
Often the MR is established by the modeller.\
3. Computational aspects include also a documentation of how the user case specifications\
are translated into computer language.\
4. Post processing documents how the raw output of one simulation is processed into input for\
the next simulation. This information given under 4.1 in the first model will be the same as\
the \"simulated input\" information under 2.4 for the next model. This is the essence of\
model inter-operability!\
5. Pre-processing before the first model can be depicted in pink as it is considered to be part\
of the user-case.",
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
            "title": "Databased Models",
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
        "ui:placeholder": "Information about related pulications"
      },
      "accessConditions": {
        "type": "string",
        "title": "Access conditions"
      },
      "workflowRationale": {
        "type": "string",
        "title": "Textual description of the Workflow and its rationale"
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
  },
  "uiSchema": {
    "classNames": "moda-overview",
    "ui:order": [
      "title",
      "project",
      "fundingAgency",
      "grantNumberOrInformation",
      "projectHomePage",
      "author",
      "version",
      "userCase",
      "publications",
      "accessConditions",
      "workflowRationale",
      "creationDate",
      "modificationDate",
      "chainOfModels"
    ],
    "creationDate": {
      "ui:readonly": "true",
      "ui:widget": "hidden"
    },
    "modificationDate": {
      "ui:readonly": "true",
      "ui:widget": "hidden"
    },
    "title": {
      "classNames": "moda-title",
      "ui:help": "",
      "ui:placeholder": "An expressive title"
    },
    "version": {
      "ui:emptyValue": "Version 6"
    },
    "project": {
      "classNames": "moda-project",
      "ui:help": "",
      "ui:placeholder": "Name of the project"
    },
    "author": {
      "ui:placeholder": "Person maintaining this MODA"
    },
    "userCase": {
      "classNames": "user-case",
      "ui:widget": "textarea",
      "ui:help": "Explain the user-case",
      "ui:placeholder": "General description of the User Case \
Please give the properties and behaviour of the particular material,\
manufacturing process and/or in-service-behaviour to be simulated.\
No information on the modelling should appear here. The idea is that this\
user-case can also be simulated by others with other models and that the\
results can then be compared."
    },
    "publications": {
      "classNames": "publications",
      "ui:widget": "textarea",
      "ui:placeholder": "Please give the publication which documents the data of this ONE simulation.\
This article should ensure the quality of this data set (and not only the quality\
of the models)."
    },
    "accessConditions": {
      "classNames": "access-conditions",
      "ui:widget": "textarea",
      "ui:placeholder": "Please list whether the model and/or data are free, commercial or open\
source. Please list the owner and the name of the software or database\
(include a web link if available)."
    },
    "workflowRationale": {
      "classNames": "workflow-rationale",
      "ui:widget": "textarea",
      "ui:placeholder": "Please give a textual rationale of why you as a modeller have chosen these\
models and this workflow, knowing other modellers would simulate the same\
end-user case differently.\
This should include the reason why a particular aspect of the user case is to\
be simulated with a particular model."
    },
    "chainOfModels": {
      "classNames": "chain-of-models",
      "physicsBasedModels": {
        "classNames": "physics-based-models",
        "ui:help": "Please identify the model. Note these are assumed to be\
physics-based models unless it is specified differently.\
Most modelling projects consist of a chain of models,\
(workflow). Here only the Physics Equations should be given\
and only names appearing in the content list of the Review of\
Materials Modelling VI should be entered. This review is\
available on\
http://ec.europa.eu/research/industrial_technologies/e-\
library.cfm).All models should be identified as electronic,\
atomistic, mesoscopic or continuum.",
        "items": {
          "cuds_type": {
            "classNames": "cuds_type",
            "ui:widget": "cudstreeselect"
          },
          "userCaseAspects": {
            "classNames": "user-case-aspects",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            }
          },
          "genericPhysics": {
            "classNames": "generic-physics",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            },
            "modelPE": {
              "physicsEquations": {
                "items": {
                  "equation": {
                    "ui:widget": "mathjax"
                  },
                }
              }
            },
            "simulatedInput": {

            }
          },
          "solverSpecs": {
            "classNames": "solver-specs",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            },
            "computationalRepresentation": {
              "physicsEquationCR": {
                "ui:widget": "textarea"
              }
            },
          },
          "postProcessing": {
            "classNames": "post-processing",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            }
          }
        }
      },
      "databasedModels": {
        "classNames": "data-based-models",
        "ui:help": "If data-based models are used, please specify.",
        "items": {
          "dbUserCase": {
            "classNames": "user-case",
            "ui:widget": "textarea"
          },
          "theDatabasedModel": {
            "classNames": "the-databased-model",
            "ui:widget": "textarea"
          },
          "computationalDetails": {
            "classNames": "computational-details",
            "ui:widget": "textarea"
          }
        }
      }
    }
  }
};
