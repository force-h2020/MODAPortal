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
            "required": [
              "romm_pe",
              "modelEntity"
            ],
            "properties": {
              "romm_pe": {
                "type": "string",
                "title": "Physics Equation According to the RoMM"
              },
              "modelEntity": {
                "type": "string",
                "title": "2.1 Model entity",
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
                "title": "3.1 Numerical solver"
              },
              "softwareTool": {
                "type": "object",
                "title": "3.2 Software Tool",
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
                "title": "3.4 Time step"
              },
              "timeStepUnit": {
                "type": "string",
                "title": "3.5 Time step unit"
              },
              "computationalRepresentation": {
                "type": "object",
                "title": "3.6 Computational representation (CR)",
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
                "title": "3.7 Computational boundary conditions"
              },
              "additionalSolverParameters": {
                "type": "string",
                "title": "3.8 Additional solver parameters"
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
  }
};
