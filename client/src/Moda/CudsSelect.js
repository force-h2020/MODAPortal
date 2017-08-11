module.exports = {
  cudsSchema: [{
    label: '1. Electronic',
    value: '1.',
    key: '1.',
    children: [{
      label: '1.1. Schrödinger Equation based models',
      value: '1.1.',
      key: '1.1.',
      children: [{
        label: '1.1.1. Single particle Schrödinger models',
        value: '1.1.1.',
        key: '1.1.1.',
        children: [{
          label: '1.1.1.1. Ab initio quantum mechanical (or first principle) models',
          value: '1.1.1.1.',
          key: '1.1.1.1.',
        }, {
          label: '1.1.1.2 Schrödinger equation with Hartree-Fock Hamiltonian model',
          value: '1.1.1.2',
          key: '1.1.1.2',
        }, {
          label: '1.1.1.3 Higher level ab initio models',
          value: '1.1.1.3',
          key: '1.1.1.3',
        }],
      }, {
        label: '1.1.2. Many body Schrödinger models',
        value: '1.1.2.',
        key: '1.1.2.',
        children: [{
          label: '1.1.2.1. Schrödinger equation with nearly free electron Hamiltonian model',
          value: '1.1.2.1.',
          key: '1.1.2.1.',
        }, {
          label: '1.1.2.2. Schrödinger with semi-empirical tight binding Hamiltonian model ',
          value: '1.1.2.2.',
          key: '1.1.2.2.',
        }, {
          label: '1.1.2.3. Schrödinger equation with Hubbard Hamiltonian model ',
          value: '1.1.2.3.',
          key: '1.1.2.3.',
        }, {
          label: '1.1.2.4. Schrödinger equation with k⋅p effective Hamiltonian model',
          value: '1.1.2.4.',
          key: '1.1.2.4.',
        }],
      }, {
        label: '1.1.3. Quantum mechanical time dependant Schrödinger models',
        value: '1.1.3.',
        key: '1.1.3.',
        children: [{
          label: '1.1.3.1. The time-dependent Schrödinger equation with k⋅p effective Hamiltonian model ',
          value: '1.1.3.1.',
          key: '1.1.3.1.',
        }, {
          label: '1.1.3.2. Other time-dependent Schrödinger models',
          value: '1.1.3.2.',
          key: '1.1.3.2.',
        }],
      }],
    }, {
      label: '1.2. Kohn Sham equation Density Functional Theory (electronic DFT)',
      value: '1.2.',
      key: '1.2.',
      children: [{
        label: '1.2.1. Kohn-Sham equation',
        value: '1.2.1.',
        key: '1.2.1.',
        children: [{
          label: '1.2.1.1. All electron',
          value: '1.2.1.1.',
          key: '1.2.1.1.',
        }, {
          label: '1.2.1.2. Pseudopotentials',
          value: '1.2.1.2.',
          key: '1.2.1.2.',
        }, {
          label: '1.2.1.3. Projector Augmented Waves',
          value: '1.2.1.3.',
          key: '1.2.1.3.',
        }],
      }, {
        label: '1.2.2. TD-DFT and TD(Spin)DFT',
        value: '1.2.2.',
        key: '1.2.2.',
      }],
    }, {
      label: '1.3. Quantum Dynamic Mean Field Theory',
      value: '1.3.',
      key: '1.3.',
    }, {
      label: '1.4. NEGF',
      value: '1.4.',
      key: '1.4.',
    }, {
      label: '1.5. Representations of continuous media',
      value: '1.5.',
      key: '1.5.',
      children: [{
        label: '1.5.1. Polarisable continuum approximation',
        value: '1.5.1.',
        key: '1.5.1.',
      }, {
        label: '1.5.2. Envelope function approximatio',
        value: '1.5.2.',
        key: '1.5.2.',
      }],
    }, {
      label: '1.6. Statistical charge transport model',
      value: '1.6.',
      key: '1.6.',
      children: [{
        label: '1.6.1. Statistical semi-classical transport model for drift-diffusion (BTE)',
        value: '1.6.1.',
        key: '1.6.1.',
      }, {
        label: '1.6.2. Fermi Golden Rule (FGR) (hopping model) for quasi particle transport ',
        value: '1.6.2.',
        key: '1.6.2.',
      }, {
        label: '1.6.3. Percolation models',
        value: '1.6.3.',
        key: '1.6.3.',
      }],
    }, {
      label: '1.7. Statistical spin transport model',
      value: '1.7.',
      key: '1.7.',
    }],
  }, {
    label: 'Atomistic',
    value: '2.',
    key: '2.1',
    children: [{
      label: '2.1. Classical Density Functional Theory and Dynamic Density Functional Theory',
      value: '2.1.',
      key: '2.1.',
    }, {
      label: "2.2. Newton's equation based models",
      value: '2.2.',
      key: '2.2.',
      children: [{
        label: '2.2.1. Molecular Mechanics',
        value: '2.2.1.',
        key: '2.2.1.',
      }, {
        label: '2.2.2. Molecular Dynamics (MD)',
        value: '2.2.2.',
        key: '2.2.2.',
        children: [{
          label: '2.2.2.1. Classical Molecular Dynamics',
          value: '2.2.2.1.',
          key: '2.2.2.1.',
        }, {
          label: '2.2.2.2. Ab initio Molecular Dynamics',
          value: '2.2.2.2.',
          key: '2.2.2.2.',
        }, {
          label: '2.2.2.3. Quantum Mechanics/Molecular Mechanics (QM/MM) a workflow',
          value: '2.2.2.3.',
          key: '2.2.2.3.',
        }],
      }],
    }, {
      label: '2.3. Statistical Mechanics atomistic models',
      value: '2.3.',
      key: '2.3.',
      children: [{
        label: '2.3.1. Monte Carlo Molecular Models ',
        value: '2.3.1.',
        key: '2.3.1.',
      }, {
        label: '2.3.2. Kinetic Monte Carlo Models',
        value: '2.3.2.',
        key: '2.3.2.',
      }],
    }, {
      label: '2.4. Atomistic spin models',
      value: '2.4.',
      key: '2.4.',
      children: [{
        label: '2.4.1. Deterministics spin models',
        value: '2.4.1.',
        key: '2.4.1.',
      }, {
        label: '2.4.2. Langevin Dynamic method for magnetic spin systems',
        value: '2.4.2.',
        key: '2.4.2.',
      }],
    }, {
      label: '2.5. Statistical transport model at atomistic level',
      value: '2.5.',
      key: '2.5.',
    }, {
      label: '2.6. Atomistic phonon-based models (Boltzmann Transport Equation)',
      value: '2.6.',
      key: '2.6.',
    }],
  }, {
    label: 'Mesoscopic',
    value: '3.',
    key: '3.',
    children: [{
      label: '3.1. Mesoscopic Classical Density Functional Theory and Dynamic Density Functional Theory',
      value: '3.1.',
      key: '3.1.',
    }, {
      label: '3.2. Coarse-Grained Molecular Dynamics and Dissipative Particle Dynamics',
      value: '3.2.',
      key: '3.2.',
      children: [{
        label: '3.2.1. Coarse-Grained Molecular Dynamics',
        value: '3.2.1.',
        key: '3.2.1.',
      }, {
        label: '3.2.2. Dissipative Particle Dynamics (DPD)',
        value: '3.2.2.',
        key: '3.2.2.',
      }],
    }, {
      label: '3.3. Statistical Mechanics mesoscopic models',
      value: '3.3.',
      key: '3.3.',
    }, {
      label: '3.4. Micromagnetic models ',
      value: '3.4.',
      key: '3.4.',
    }, {
      label: '3.5. Mesoscopic phonon models (Boltzmann Transport Equation)',
      value: '3.5.',
      key: '3.5.',
    }],
  }, {
    label: 'Continuum',
    value: '4.',
    key: '4.',
    children: [{
      label: '4.1. Solid Mechanics',
      value: '4.1.',
      key: '4.1.',
      children: [{
        label: '4.1.1. Materials Relations in solid mechanics',
        value: '4.1.1.',
        key: '4.1.1.',
      }, {
        label: '4.1.2. Model development in solid mechanics: new MR',
        value: '4.1.2.',
        key: '4.1.2.',
      }],
    }, {
      label: '4.2. Fluid Mechanics ',
      value: '4.2.',
      key: '4.2.',
      children: [{
        label: '4.2.1. Compressible vs incompressible flow',
        value: '4.2.1.',
        key: '4.2.1.',
      }, {
        label: '4.2.2. Viscous vs inviscid flow',
        value: '4.2.2.',
        key: '4.2.2.',
      }, {
        label: '4.2.3. Laminar vs turbulent flow',
        value: '4.2.3.',
        key: '4.2.3.',
      }, {
        label: '4.2.4. Newtonian vs non-Newtonian fluids and Rheology',
        value: '4.2.4.',
        key: '4.2.4.',
      }],
    }, {
      label: '4.3. Heat Flow and Thermo-mechanical behaviour ',
      value: '4.3.',
      key: '4.3.',
    }, {
      label: '4.4. Continuum Thermodynamics and Phase Field models',
      value: '4.4.',
      key: '4.4.',
      children: [{
        label: '4.4.1. Thermodynamics',
        value: '4.4.1.',
        key: '4.4.1.',
      }, {
        label: '4.4.2. Phase Field models',
        value: '4.4.2.',
        key: '4.4.2.',
      }],
    }, {
      label: '4.5. Chemistry reaction (kinetic) models (continuum)',
      value: '4.5.',
      key: '4.5.',
    }, {
      label: '4.6. Electromagnetism (including optics, magnetics and electrical)',
      value: '4.6.',
      key: '4.6.',
      children: [{
        label: '4.6.1. Magnetics',
        value: '4.6.1.',
        key: '4.6.1.',
      }, {
        label: '4.6.2. Elect(ron)ics',
        value: '4.6.2.',
        key: '4.6.2.',
      }, {
        label: '4.6.3. Optics',
        value: '4.6.3.',
        key: '4.6.3.',
      }],
    }],
  }],
}
