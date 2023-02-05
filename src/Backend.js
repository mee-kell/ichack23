import React, { useEffect, useState } from 'react';

const Backend = ({ subject }) => {

    // Import from data scraping colab

    const info = " Dr Dalal Alrajeh is interested in  Formal methods, software engineering, artificial intelligence for constructing correct software and their applications (e.g., software for digital forensics). \
    Dr Wenjia Bai is interested in  Medical Image Analysis and Understanding, Machine Learning. \
    Dr Francesco Belardinelli is interested in  Research Interest Logic and AI \
    Dr Mario Berta is interested in  My research area is quantum information theory, with a focus on quantum Shannon theory and quantum cryptography. I am interested in connections to mathematical physics, most importantly through the fields of matrix analysis and (non-commutative) optimization theory. \
    Dr Paul Bilokon is interested in  Artificial intelligence, machine learning, reinforcement learning, high-performance computing, quantum computing, software-engineering, low-latency programming, real-time machine learning, applications to finance and drug discovery, cryptocurrencies, decentralised finance. \
    Dr Cristian Cadar is interested in  Affiliations 3D computer vision, geometric machine learning, non-euclidean geometry, quantum computing \
    Dr Giuliano Casale is interested in  Software Engineering, Computer Systems and Software Security, with a focus on building practical techniques for improving the reliability and security of software systems. \
    Dr Antoine Cully is interested in  Quality-of-service, Resource management, Cloud services, Software Architecture. \
    Prof. Andrew Davison is interested in  Research Interest Robotics and Artificial Intelligence: How to use learning algorithms to make robots more versatile, robust, and adaptive. \
    Dr Yves-Alexandre de Montjoye is interested in  Computer Vision, Robotics, SLAM (Simultaneous Localisation and Mapping), Augmented Reality. \
    Dr Soteris Demetriou is interested in  Data Privacy, Machine Learning for biometric and behavioral identification, Infrastructure for the safe and anonymous use of data, Data Science for Good. \
    Dr Alastair Donaldson is interested in  Research Interest Mobile Computing Security and Privacy: Systems Security, Smartphone Security, IoT Security \
    Prof. Sophia Drossopoulou is interested in  Formal verification techniques for multicore software. Software performance optimization for multicore processors. \
    Dr Naranker Dulay is interested in Object Capability Policies, Concurrent Programming, Program Verification, Characterization of Program Evolution and Theorem Proving. \
    Prof. Abbas Edalat is interested in  Security, Pervasive-Mobile-Distributed Systems, Networking, Software Engineering, Systems and Network Management, and Applied Machine Learning. \
    Dr Aldo Faisal is interested in  Exact Computation in Differential and Integral Calculus, ODE's, Computational Geometry, Computation in Logical Form, Optimisation Theory, Game Theory, Computational Psychiatry, Attachment Based Psychotherapy. \
    Dr Tony Field is interested in  Neurotechnology, Biomedical Engineering, Machine Learning, Algorithmic Prediction of Human Behaviour. \
    Dr Antonio Filieri is interested in  Engineering for High-Performance, Virtual-time program execution (VTE), Functional programming, Individual-based models (IbMs). \
    Prof. Philippa Gardner is interested in  Exact and approximate methods for probabilistic software analysis and probabilistic programming, Control Theory for Software Engineering, and Runtime-efficient and incremental verification of quantitative and functional software properties. \
    Dr Abhijeet Ghosh is interested in  JavaScript, Concurrency and Resource Reasoning. \
    Dr Ben Glocker is interested in  Appearance Modeling, Computational Illumination and Photography for Graphics and Vision. \
    Prof. Yi-Ke Guo is interested in  Biomedical Image Analysis and Computer Vision with a focus on semantic understanding of images using Machine Learning. \
    Dr Hamed Haddadi is interested in  Knowledge Discovery, Data Mining and Large-Scale Data Management. \
    Prof. Chris Hankin is interested in  User-Centred Systems, Networks, Applied Machine Learning, Privacy, Security. \
    Dr Thomas Heinis is interested in  Security, Program Analysis and Programming Language Theory. \
    Prof. Michael Huth is interested in  Scientific Data Management, Distributed Data Processing, Spatial Databases, Indexing. \
    Dr Edward Johns is interested in  Trusted Computing, Access Control, Formal Methods, Insider Threats, Model-Driven Security, Risk Analysis. \
    Dr Bernhard Kainz is interested in  Research Interest Robot Learning , Robot Manipulation, Deep Learning, Reinforcement Learning, Computer Vision \
    Prof. Paul Kelly is interested in  Machine Learning, Visualisation, and Interactive Real-Time Image Processing, High-Performance Medical Data Analysis. \
    Prof. William Knottenbelt is interested in  Languages, compilers, operating systems for parallel computing. Domain-specific tools and active libraries. Computer systems issues underlying performance. Software tools for portable parallel programming. Irregular and data-intensive applications. Applying a broad range of mathematical and theoretical ideas to computer systems problems. Performance evaluation, modelling and prediction. Caching, combining and randomisation in processors, multiprocessors, operating systems and wide-area networks and Language, linguistics, literature, literary theory. \
    Dr Marios Kogias is interested in  Application of mathematical modelling techniques to real life systems. modelling and optimisation in parallel queueing systems (especially split-merge and fork-join systems), modelling of storage systems, stochastic modelling of sport, stochastic modelling of healthcare systems, resource allocation and control in cloud-computing environments, numerical solution of (semi-)Markov models and specification techniques for SLA specification, compliance prediction and monitoring. \
    Prof. Kin Leung is interested in  Affiliations Operating systems, networking, distributed systems, datacenters, in-network compute, transport protocols, remote procedure calls \
    Dr Stefan Leutenegger is interested in  Affiliations Wireless Communications, Wireless Technologies, Communication Networks and Stochastic Modeling and Queueing Theory. In Dept. of and Dept. of Computing . \
    Dr Yingzhen Li is interested in  Autonomous robot navigation: Building scalable maps, multi sensor fusion, map semantics, novel camera systems, application of these to Unmanned Aerial Systems (UAS) and ground robots. \
    Dr Ben Livshits is interested in  Machine learning, Bayesian statistics, representation learning, generative models, robustness in learning, AI-assisted decision making. \
    Prof. Alessio Lomuscio is interested in  Security, Privacy, Program Analysis, Compilers, Software Engineering and Crowdsourcing. \
    Prof. Wayne Luk is interested in  Logic-Based Specification and Verification of Autonomous Systems. \
    Prof. Emil Lupu is interested in  Hardware and Architecture, Reconfigurable Computing, Design Automation. \
    Dr Sergio Maffeis is interested in  Adaptive Systems and Security, Applied to: Personal Networks for Healthcare, Autonomous Vehicles, Wireless Sensor Networks, Mobile ad-hoc networks, moretraditional networked infrastructures, data quality and protection, Security for sensor based environments, Security Management and Authorisation Policies. \
    Dr Peter McBrien is interested in  Computer Security, Web Programming and Process Calculi. \
    Prof. Julie McCann is interested in  Data Integration, Information Systems Modelling and Distributed Databases \
    Dr Pedro Mediano is interested in  Decentralised Algorithms, Protocols, Cross-Layered Solutions to Wireless Sensor Networks, Ubiquitous and Mobile computing and Autonomic Computing. \
    Dr Ruth Misener is interested in  Computation in neural systems, computational cognitive neuroscience, information theory, machine learning, neurodynamics, mental health, and consciousness. \
    Prof Stephen Muggleton is interested in  Global Optimization, Mixed-Integer Nonlinear Optimization, Optimization Software, Bioprocess Optimization. \
    Dr. Dario Paccagnan is interested in  Inductive Logic Programming, Machine Learning Applications in Molecular Biology, Intelligent Adaptive Agents and Natural Language Learning. \
    Prof. Maja Pantic is interested in  Game theory, control theory, mathematical programming, network optimization. Modeling, coordination and societal impact of multi-agent systems where self-interested agents take autonomous decisions. Applications in smart mobility and electricity markets. \
    Dr Panos Parpas is interested in  Computer Vision and Machine Learning for Affective Computing. \
    Dr Iain Phillips is interested in  Development and analysis of algorithms for large scale optimisation problems. Exploiting the structure of large scale models arising in applications. \
    Prof. Peter Pietzuch is interested in  Theory of concurrency, reversible computation. \
    Dr Holger Pirk is interested in  Distributed Systems, Systems and Data Management and the Design and Engineering of Scalable, and Reliable and Secure Large-Scale Software Systems. \
    Dr. Azalea Raad is interested in  My research interests lie in analytical query processing on memory-resident data. In particular, I study storage schemes and processing models for modern hardware. \
    Dr. Marek Rei is interested in  Programming Languages, Formal Methods, Verification, Non-Volatile Memory, Concurrency, Persistency, Semantics, Weak Memory Models, Transactional Memory, Program Logics, and Stateless Model Checking. \
    Prof. Daniel Rueckert is interested in  Machine learning, natural language understanding, neural architectures, representation learning, compositional semantics, educational and healthcare applications. \
    Prof. Alessandra Russo is interested in  Machine and Deep Learning, Predictive Intelligence in Medicine, Network Neuroscience, and Holistic AI. \
    Dr Nicole Salomons is interested in  Image Acquisition and Analysis using Machine Learning, Medical Applications. \
    Dr Bjoern Schuller is interested in  Computational Logic, Logic-based Machine Learning, Probabilistic and Distributed Inference and their applications in cognitive systems and autonomous systems. \
    Prof. Murray Shanahan is interested in  Human-Robot Interaction, Intelligent Tutoring Systems, Artificial Intelligence, User Modelling, Robotics \
    Prof. Lucia Specia is interested in  Machine Learning, Audiovisual Signal Processing, Human-Computer/Robot-Interaction and Affective Computing. \
    Prof. Francesca Toni is interested in  Neurodynamics, Consciousness, Cognitive Robotics, Reinforcement Learning, General Artificial Intelligence, the Frame Problem and the Technological Singularity. \
    Dr Calvin Tsay is interested in  Research Interest Multimodal language processing, Machine translation, Quality evaluation and estimation of machine translation, other NLP applications, Text adaptation especially text simplification \
    Prof Iddo Tzameret is interested in  Knowledge Representation and Reasoning: Argumentation, Abduction, Non-monotonic and Default Reasoning, Multi-Agent Systems. Argument Mining. \
    Dr Sebastian Uchitel is interested in  Computational methods for optimisation and control. Applications in machine learning and engineering processes. \
    Dr Steffen van Bakel is interested in  Algorithms and Complexity: Limits of efficient algorithms and inference, Lower bounds on concrete computational models, Satisfiability, Proof complexity, Combinatorial, algebraic and logical approaches in complexity, Theory of SAT- and constraint-solving. \
    Dr Mark van der Wilk is interested in  Software Engineering, Modelling and Analysis as a means to gain confidence in requirements, design and code artefacts, Partial Behaviour Models, Scenario-Based Specifications, Verification of Probabilistic Systems, Controller Synthesis, Machine Learning for Automated Diagnosis, Automatic Abstraction for Validation, and Adaptive Systems. \
    Dr. Lluis Vilanova is interested in  Functional Programming:Lambda Calculus, Term Rewriting Systems, Term Graph Rewriting Systems, Mobile Ambients, Systems Biology, Type systems: Sequent Calculus for Classical Logic, Curry Howard Isomorphism,Intersection type assignment, Polymorphic type assignment, Decidable systems, Type theory and theorem provers, Semantics: Filter models, Approximation models, Game theory and Abstract interpretation. \
    Dr Herbert Wiklicky is interested in  Uncertainty in Machine Learning, Automatic Model Selection, Bayesian Inference, Reinforcement Learning, Bayesian Deep Learning, Generalisation \
    Dr. Nicolas Wu is interested in  Computer architecture; operating systems and runtimes; resource and device virtualization; hardware/software interfaces and co-design; resource management in heterogeneous and parallel systems; security and privacy. \
    Dr Stefanos Zafeiriou is interested in  Program Analysis, semantics of programming languages, Probabilistic Models, Program Synthesis, semantics in Computer Security and Quantum Computation. \
    Prof. Pantelis J Beaghton is interested in  Programming Languages, Functional Programming, Category Theory \
    "

    const grantham = "Dr Ajay Gambhir: Ajay's work focuses on the economics and policy of low-carbon technologies. \
    Dr Ed Gryspeerdt: The research in Ed's group focuses on the physics and properties of clouds and their role in the Earth's climate system. A major part of this is in assessing changes in clouds and rain caused by particulates (known as aerosols), particularly from shipping and aviation. \
    "

    const { Configuration, OpenAIApi } = require("openai");

    const API_KEY = "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";

    const configuration = new Configuration({
        apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const [reply, setReply] = useState('');
    const [person, setPerson] = useState('');

    async function askAdvice() {
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "Here is a description of my project: " + subject + ". How should I get started or improve it?",
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            setReply(completion.data.choices[0].text);
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    }

    async function askPeople() {
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "Here is a list of people: " + info + grantham + "Who should I contact if I am interested in " + subject + "? Name: ",
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            setPerson(completion.data.choices[0].text);
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    }

    return (
        <div>
            <button class="nes-btn is-primary" onClick={askAdvice}>Next steps</button>
            <p>{reply}</p>
            <button class="nes-btn is-success" onClick={askPeople}>Potential Advisors</button>
            <p>{person}</p>
        </div>
    )

}

export default Backend;