export default {
  chainOfModels: `Each physics-based model used in this simulation is to be documented in four chapters:
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

  physicsBasedModels: `Please identify physics models. Note these are assumed to be
physics-based models, for databasedModels see below.
Most modelling projects consist of a chain of models,
(workflow). Here only the Physics Equations should be given
and only names appearing in the content list of the Review of
Materials Modelling VI should be entered. This review is
available on
http://ec.europa.eu/research/industrial_technologies/e-
library.cfm).All models should be identified as electronic,
atomistic, mesoscopic or continuum.`,

  databasedModels: `Each data-based model in this simulation is to be documented in three chapters:
1. Aspect of the User Case or system simulated with this data-based model
2. Data-based Model
3. Computational detail of the datamining operation`
}