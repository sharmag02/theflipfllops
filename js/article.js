function toggleReadMore(id, btn) {
    const moreText = document.getElementById(id);
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}




// Dummy content for teacher and student articles
const teacherPages = [
    `<div class="article-page">

                    <!-- Teacher Article 1 -->
                    <div class="article-card">
                        <header>
                            <h2>Blockchain Technology</h2>
                            <div class="author">By: <span>Bhawna Shukla(Assistant Professor)</span></div>
                            <img src="image/article/teacher/Bhawna Shukla.jpg" alt="Bhawna Shukla" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                Blockchain technology was created for the digital cryptocurrency Bitcoin in 2008.
                                However,
                                its
                                applications are much wider than alternative currency, and it is poised to be <b>"the
                                    next
                                    big
                                    thing" </b> in applied sciences.
                            </p>
                            <div class="more-text" id="teacher1-more">
                                <p> In a nutshell, a blockchain is a distributed
                                    database that provides an unalterable public record of digital transactions. It can
                                    be
                                    viewed as a distributed digital ledger containing a chain of block information,
                                    where
                                    each
                                    block is identified by a cryptographic signature. These blocks are all back-linked;
                                    that
                                    is,
                                    they refer to the signature of the previous block in the chain, and that chain can
                                    be
                                    traced
                                    back to the very first block created. As such, the blockchain contains an
                                    un-editable
                                    record
                                    of all the transactions made. The transparent and decentralized nature of the
                                    blockchain
                                    network enables the development of a non-refutable, and unbreakable record of data,
                                    which is
                                    the fundamental feature of many applications, such as insurance, finance, fraud
                                    detection,
                                    copyright protection, smart contracts, identity management, e-commerce, and
                                    healthcare.
                                    <br>

                                    Even in higher education, blockchain technology can help track student credentials
                                    and
                                    achievements in a cheap, secure, reliable, and public way. Also, organizations are
                                    now
                                    using
                                    blockchain to secure their data, reduce inefficiencies in the supply chain and
                                    logistics
                                    network, and in intellectual property management. Blockchain is also used in food
                                    safety,
                                    healthcare data management, fundraising, and investment with security token
                                    offering,
                                    and in
                                    the notary. <br>

                                    One indicator of an important emerging technology is the strength of funding. It is
                                    interesting to notice that various funding sources are considering "investing" in
                                    blockchain
                                    technology, including venture capitals, various foundations, and federal agencies.
                                    <br>

                                    Blockchain is being implemented in almost every area of business. It can reduce
                                    costs of
                                    operations, for instance, by securing company and client data to avoid costly data
                                    breaches
                                    and making it easy to exchange value and data in a peer-to-peer manner without
                                    middlemen.
                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher1-more', this)">Read More</button>
                        </div>
                    </div>
                    

                    <!-- Teacher Article 2 -->
                    <div class="article-card">
                        <header>
                            <h2> A Little Step Towards Innovation</h2>
                            <p class="author">By: <span> Jitendra Bhardwaj (Assistant Professor)</span></p>
                            <img src="image/article/teacher/Jitendra Bhardwaj.jpg" alt="jbsir" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>The word “Innovation” is not unfamiliar to us, in fact last
                                two decades are having highest number of innovative technologies and major transformations , and it
                                is growing exponentially especially in IT , communication , health and manufacturing sectors. </p>
                            <div class="more-text" id="teacher2-more">
                                <p>Connected devices allow teachers to track students' progress in real-time, making it
                                    easier
                                    to identify areas where they need help IoT stands for Internet of Things. It refers
                                    to a
                                    group
                                    of interconnected hardware devices embedded with
                                    sensors, software and that have connectivity
                                    capabilities that enable them to collect and exchange
                                    data over the Internet. In the field of education, IoT
                                    can enhance the learning experience, personalised
                                    learning, improve safety and security, and optimise
                                    campus management. IoT technology has the
                                    potential to significantly impact the education sector
                                    by introducing innovative and interactive learning
                                    experiences.
                                    Application of IoT in Education System
                                    Let's have a look at some of the topics in the
                                    education system where IoT can have an impact:-
                                    Smart Classroom:- A smart classroom is an innovative learning environment that
                                    integrates
                                    technology to
                                    enhance the teaching and learning experience. IoT enables the creation of smart
                                    classrooms
                                    equipped
                                    with connected devices and sensors. These device can collect data on various
                                    parameters
                                    like
                                    temperature, noise level, lighting, providing a more comfortable and productive
                                    learning
                                    environment.
                                    Personalised Learning :- IoT generates personalised learning and can address the
                                    diverse
                                    need, interest,
                                    and learning style of the students. It promotes individualised instructions,
                                    engagement
                                    and
                                    self-paced
                                    learning, ultimately leading to improve learning outcomes and students' success.
                                    Remote Learning:- IoT devices, such as webcams, smart board, and virtual reality
                                    (VR)headsets, can
                                    enable remote learning experiences. Students can access educational resources from
                                    anywhere
                                    in this
                                    world.
                                    Smart Campus Management:- IoT technology can revolutionise campus management by
                                    providing
                                    real
                                    time monitoring and automation. IoT connected sensors can monitor energy
                                    consumption,
                                    optimise
                                    resource allocation , and automate maintenance processes, leading to cost savings
                                    and
                                    more
                                    effective
                                    operations.
                                    Safety and Security:- IoT devices can enhance safety and security measures on
                                    campuses.
                                    Smart
                                    surveillance system can monitor premises, detect unauthorised access, and send alert
                                    in
                                    real-time.
                                    Wearable devices can track students’ locations during field trips or emergencies,
                                    ensuring
                                    their safety.
                                    IoT can give hands-on experiences through robotics, coding, and programming.
                                    IoT can facilitate communication among teachers, parents and students.
                                    IoT can also help physically disabled students in learning through their own way. It
                                    provide
                                    personalised
                                    support to those type of students.</p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher2-more', this)">Read More</button>
                        </div>
                    </div>

                </div>`,
    `<div class="article-page" >
                    <div class="article-card">

                        <header>
                            <h2>Solition Transmission</h2>
                            <p class="author">By: <span>Pragati Patharia(Assistant Professor)</span></p>
                            <img src="image/article/teacher/pragati.jpg" alt="Pragati Patharia" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                Soliton transmission is a balancing act that offsets two
                                major classes of pulse degradation in optical fibers to
                                improve the quality of signal transmission. One type of
                                degradation is the dispersion that causes pulses to
                                spread in duration as they travel through long lengths
                                of fiber.
                            </p>
                            <div class="more-text" id="teacher3-more">
                                <p> <b>Solitary waves</b> are waves that travel alone and are not affected by other
                                    waves. There are two types of solitary waves, spatial and temporal. The
                                    formation of solitary waves comes from the nonlinear properties of the
                                    medium. The natural properties of light to disperse in space are being
                                    compensated by the nonlinearity of the medium in such a way that the
                                    higher intensity part of an optical beam (typically in the center of a Gaussian
                                    beam) increases the value of the refractive index of the medium forming a
                                    de facto core of waveguide that is responsible to confine in reverse a
                                    dispersed light to the middle of the beam itself. This can be easily
                                    understood if the induced nonlinearity is very high, as the beam gets
                                    focused towards this area. On the other hand, if the induced nonlinearity is
                                    less or none, the beam will be spatially dispersed. <br>

                                    Even in higher education, blockchain technology can help track student credentials
                                    and
                                    achievements in a cheap, secure, reliable, and public way. Also, organizations are
                                    now
                                    using
                                    blockchain to secure their data, reduce inefficiencies in the supply chain and
                                    logistics
                                    network, and in intellectual property management. Blockchain is also used in food
                                    safety,
                                    healthcare data management, fundraising, and investment with security token
                                    offering,
                                    and in
                                    the notary. <br>

                                    <b>PROGRESS IN SOLITON TRANSMISSION IN OPTICAL FIBRES:</b>
                                    WDM is a technology which multiplexes the number of optical carrier signal
                                    onto a single optical fibre by using different wavelength parallel. TDM is a
                                    system which transmits and receive the independent signals over a common
                                    signal path. We describe an inline modulation scheme up to 80Gbit/s per
                                    channel and its 2-channel WDM transmission over 10000Km. With small
                                    dispersion swing. <br> <b>SOLITON AMPLIFIERS:</b> There is fibre loss which occurs
                                    due
                                    to loss of energy
                                    which is observed by the fibre as the pulse wave propagates through a fibre.
                                    Such losses cause broadening on solitons. These losses are compensated
                                    using amplification. There are two types of amplification:
                                    Lumped amplification <br>
                                    <span>&#8226;</span> Distributed amplification <br>
                                    <span>&#8226;</span>PULSE COMPRESSION is a process in
                                    which optical pulse gets compressed. <br>
                                    There are 2 types of pulse
                                    compressor: <br>
                                    <span>&#8226;</span>Soliton effect compressor <br>
                                    <span>&#8226;</span> Grating fibre <br>
                                    <b> SOLITON BIT RATE:</b> Most of the commercial wavelength division multiplier
                                    (WDM) systems replace the traditional nonzero (NRZ) and return to zero (ZR)
                                    modulation. TIMING JITTER Each soliton carries a bit of information which is
                                    separated from each other, this separation is only possible when soliton pulse
                                    width becomes much shorter than bit rates. Soliton jitter as the result of
                                    amplified noise which is responsible for bit rate error. <br>
                                    <b>CONCLUSION:</b> Soliton-based optical communication is very beneficial for long
                                    distance transmission without any attenuation and has a very high
                                    information carrying capacity. Soliton transmission in optical fibre played a
                                    very essential and useful function in the communication system. However,
                                    there are certain issues with the soliton transmission application, even if
                                    optical solitons are being used more and more.
                                    We sincerely expect that additional research in this area will pave the way for
                                    the use of optical transmission in cutting-edge technologies in the future.


                                </p>
                                <div class="art-img">

                                    <img src="image/article/used photo/pp.jpg" alt="Solation" class="article-img">
                                    <img src="image/article/used photo/pp2.jpg" alt="Solation" class="article-img">
                                </div>
                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher3-more', this)">Read More</button>
                        </div>
                    </div>
                    <div class="article-card">
                        <header>
                            <h2>All About ChatGpt</h2>
                            <p class="author">By: <span>Anita Khanna(Associate Professor)</span></p>
                            <img src="image/article/teacher/anita khanna.jpg" alt="Bhawna Shukla" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                Imagine you get all your answers directly
                                without searching through Google. That’s
                                ChatGPT, launched on 30th Nov 2022.
                                ChatGPT is a new generation AI chatbot
                                developed by OpenAI which interacts
                                conversationally. It
                                gives
                                human-like
                                conversational responses through on-demand
                                readable text, images and videos.
                            </p>
                            <div class="more-text" id="teacher4-more">
                                <p> ChatGPT is
                                    powered by a large language model (LLM)
                                    which is a deep learning technique that uses
                                    large corpora of data to understand human
                                    language and generates a response.
                                    ChatGPT’s LLM is called GPT-3.5. <br>

                                    <q>Just imagine, how much data has been used to train the model to come up with this
                                        perfection</q> <br>

                                    ChatGPT not only replies to questions but also admits its mistakes, accepts
                                    challenges
                                    and rejects inappropriate requests. ChatGPT has emerged as a threat to Google
                                    search.
                                    On Google, one has to search for a relevant answer, and ChatGPT gives a direct
                                    answer.
                                    Observing the threat, Google has come up with Bard powered by LaMDA, which is in the
                                    testing stage. China is also coming with their chatbot BAIDU for
                                    conversational-style
                                    search results. So there is going to be a clash of AI tools in future. <br>

                                    Chat GPT is a revolution in research practices and publishings but has concerns too.
                                    It
                                    will
                                    accelerate innovation and increase the diversity of scientific perspectives but it
                                    may
                                    degrade the quality and transparency of research. ChatGPT results are convincing but
                                    can
                                    be wrong which can distort scientific facts and spread misinformations. It is not
                                    the
                                    replacement for Google, just a facilitator as it is a complex algorithm generating
                                    meaningful sentences. <br> ChatGPT is free. <a href="http://chat.openai.com"
                                        target="_blank">Open login and access.</a>

                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher4-more', this)">Read More</button>
                        </div>
                    </div>
                </div>`,
    `<div class="article-page" >
                    <div class="article-card">

                        <header>
                            <h2> COMMUNICATION STANDARDS: IMPACT ON COMMUNICATION ENGINEERS'
                                JOB MARKET</h2>
                            <p class="author">By: <span>Dr Ruchi Tripathi(Assistant Professor)</span></p>
                            <img src="image/article/teacher/Ruchi.jpg" alt="Ruchi Tripathi" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                Hello budding engineers, You guys belong to Generation Z,
                                while most of us faculty members are millennials. This
                                essentially means that we (millennials) have more or less seen
                                the evolution up close and have witnessed the changes in the
                                way information floats from point X to point Y. Being in this
                                younger generation presents you guys with tremendous opportunities as well as many more
                                challenges that are ahead of us. As a communication engineering student, you are in a
                                unique position to capitalise on the dynamic changes in
                                communication standards and harness the opportunities they
                                bring to the job market.
                            </p>
                            <div class="more-text" id="teacher5-more">
                                <p> With the rise of new communication technologies, such as <b>virtual reality and
                                        artificial
                                        intelligence,</b> communication engineers must adapt their skills to meet the
                                    demands of these
                                    emerging platforms. This requires a deep understanding of the underlying technology
                                    as well
                                    as the ability to effectively communicate complex concepts to a variety of
                                    audiences.<br>

                                    Advancements in communication technology have not only evolved but have also
                                    redefined
                                    the benchmarks for effective communication, resulting in a notable transformation in
                                    the job
                                    landscape for communication engineers. <br>

                                    Each generation must bring something new and different to the table, and in the case
                                    of 6G,
                                    holographic communication and digital replicas take center stage. With improved high
                                    resolution rendering and wearable or flexible displays, devices will be able to
                                    render media
                                    for 3D hologram displays. However ,to provide real time services with hologram
                                    displays,
                                    an extremely high data rate of transmission wil be necessary, which wil require new
                                    data encoding
                                    techniques. To achieve new use cases, it wil be essential to embed "inteligence"
                                    throughout the
                                    network stack. Artificial inteligence, which encompasses reasoning, knowledge
                                    representation,
                                    learning, and perception, relies heavily on quality data. The more data that is
                                    available, the better it
                                    can be analysed in context. The 6G architecture should natively support ubiquitous
                                    computing to
                                    enable true inteligence. In 6G, computing and inteligence services wil become
                                    crucial parts of the
                                    network and network automation. "Inteligence engines" are better able to arrive at
                                    inferences through
                                    <b>"specialization"</b>, which is an analysis of data from a smal or hyper-local
                                    context,
                                    rather than
                                    <b>"generalization"</b> , which extrapolates to a larger context. <br> Overall,
                                    evolving communication standards create opportunities for adaptable
                                    communication engineers. <b>Staying current with tech and techniques is key in a
                                        high-demand
                                        job market, with millennials ready to assist.</b>


                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher5-more', this)">Read More</button>
                        </div>
                    </div>
                    <div class="article-card">
                        <header>
                            <h2>Metamaterial: An artificial material </h2>
                            <p class="author">By: <span>Dr Nipun Kumar Mishra(Associate Professor)</span></p>
                            <img src="image/article/teacher/Nipun.jpg" alt="Nipun Mishra" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                A metamaterial (from the Geek word meta
                                meaning “beyond” and the latin word
                                materia ,“ meaning” matter” or “ material”) is
                                any material needed to have a propertythat
                                is not found in naturally occurring materials.
                            </p>
                            <div class="more-text" id="teacher6-more">
                                <p> They are made from assemblies of multiples
                                    elements fashioned from composite
                                    materials such as metals and dielectrics. The
                                    materials are usually arranged in periodic
                                    patterns at scales that are smaller than the
                                    wavelengths of the phenomena they
                                    influence. <br>

                                    Metamaterials derive their properties not from the properties of the materials from
                                    which it is made,
                                    but from their newly designed structures. Their precise shape, geometry,
                                    size, orientation and arrangement give them their smart properties
                                    capable of manipulating electromagnetic waves: by blocking, absorbing,
                                    enhancing, or bending waves, to achieve bene ts that go beyond which is
                                    not possible with conventional materials. Appropriately designed
                                    metamaterials can a ect waves of electromagnetic radiation or sound in a
                                    manner not observed in naturally available materials. The smaller
                                    dimension of the unit cell as compared to wavelength and periodicity
                                    creates an e ective medium which shows negative permittivity and
                                    permeability. Simultaneous negative permittivity and permeability
                                    produce a negative refractive index medium hence unusual characteristics
                                    like the bending of waves are observed. Those that exhibit a negative index
                                    of refraction for particular wavelengths have been the focus of a large
                                    amount of research. Due to the unusual characteristics of
                                    metamaterial, it can be used in cloaking, imaging, ltering and absorption
                                    of Electromagnetic waves etc. Metamaterial absorbers are nding
                                    applications in energy harvesting, radar cross-reduction and sensing etc. <br>


                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher6-more', this)">Read More</button>
                        </div>
                    </div>
                </div>`,
    ` <div class="article-page" >
                    <div class="article-card">

                        <header>
                            <h2> Physical Layer Security in
                                Wireless Communication
                                Systems</h2>
                            <p class="author">By: <span>Deepak Kumar Rathore(Assistant Professor)</span></p>
                            <img src="image/article/teacher/deepak.jpg" alt="Deepak Rathore" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                <b>Introduction:</b> Physical layer security (PLS) has become a promising frontier in
                                securing wireless
                                communication systems. Unlike traditional cryptographic methods that rely heavily on
                                algorithms at application layer, We exploits the physical characteristics of
                                wireless channels to provide security at physical layer. By leveraging the physical
                                properties of the wireless medium, it oers a complementary approach to traditio- nal
                                cryptographic techniques. As wireless networks continue to evolve, integrating
                                PLS will be crucial in ensuring the condentiality, integrity, and authenticity of
                                transmitted data in an increasingly connected world. Ongoing research and deve- lopment
                                will be essential in overcoming existing challenges and enhancing the
                                robustness of PLS methodologies.
                            </p>
                            <div class="more-text" id="teacher7-more">
                                <p> <b>Concept and Principles</b> At its core, PLS leverages the inherent properties of

                                    the wireless medium to enhance security. The fundamental idea is that the charac-
                                    teristics of wireless channels—such as fading, noise, and interference—can be
                                    utilized to obscure the information being transmitted from unauthorized
                                    eavesdroppers. By ensuring that the legitimate receiver (the intended user) can
                                    successfully

                                    decode the message while the eavesdropper (the unauthorized user) cannot, PLS
                                    establishes a new layer of security. <br>
                                    <b>Key Principles:</b> <br>

                                    <b>1. Jamming:</b>


                                    A Jammer transmits the articial noise (AN) to disrupt the communica-
                                    tion between legitimate users and base station. It tries to minimizing the legitima-
                                    te system achievable data rate. Since jammer may transmit continuously (in uplink

                                    and downlink), it aects the channel estimation process hence can severely degra- de
                                    the performance of wireless communication system. <br>
                                    <b>2. Eavesdropping and Secrecy Capacity:</b> A Eavesdropper silently listens to the
                                    communication between legitimate users and BS. One of the important metrics to
                                    measure the eciency of eavesdropper is the secrecy capacity. The secrecy capaci- ty
                                    is dened as the maximum achievable secrecy rate. Let the secrecy rate Cs is the
                                    amount of information that can be sent reliably and condentially, then it is mathe-
                                    matically dened as Cs= [Cm-Ce] +, where Cm and Ce denotes the achievable rate
                                    of the legitimate users and the eavesdropper. <br>
                                    <b>3. Cooperative Relaying:</b>

                                    This involves using multiple antennas or relay nodes to
                                    enhance the signal quality for the legitimate receiver while simultaneously degra-
                                    ding the reception quality for the eavesdropper. Techniques like deco-
                                    de-and-forward or amplify-and-forward are commonly employed. <br>
                                    <b>4. Artificial Noise:</b> Adding articial noise to the signal can mask the
                                    transmitted
                                    information from potential eavesdroppers. This technique ensures that even if the
                                    eavesdropper intercepts the signal, it remains unintelligible.
                                    <br>
                                    <b>Chalenges and Solution:</b>

                                    Despite its promise, implementing PLS in wireless communication systems pre- sents
                                    several challenges: <br>


                                    1. Wireless channels are inherently unpredictable, which can

                                    complicate the maintenance of secrecy. <br>
                                    2. As technology advances, eavesdroppers may gain
                                    sophisticated tools to intercept signals, necessitating constant innovation in PLS
                                    techniques. <br>
                                    3. The mobility of users in wireless networks can aect the reliability of

                                    secure communication. <br>


                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher7-more', this)">Read More</button>
                        </div>
                    </div>
                    <div class="article-card">
                        <header>
                            <h2>Quantum Computing: A Glimpse into the Future of Technology </h2>
                            <p class="author">By: <span>Dr. Prabira Kumar Sethi(Associate Professor)</span></p>
                            <img src="image/article/teacher/prabira.jpg" alt="Prabira Sethi" class="author-img">
                        </header>
                        <div class="article-content">
                            <p>
                                <b>Quantum computing,</b> a field that merges the fascinating
                                principles of quantum mechanics with computation, has
                                been heralded as the next transformative technology, poised
                                to revolutionize industries ranging from healthcare and
                                cryptography to artificial intelligence and logistics. While
                                classical computers, which have served humanity for decades,
                                process information in binary bits (0s and 1s), quantum
                                computers harness the unique properties of quantum bits,
                                or qubits, enabling them to perform certain computations
                                exponentially faster.
                            </p>
                            <div class="more-text" id="teacher8-more">
                                <p> <b>What makes Quantum Computing Unique?</b> At the heart of quantum computing lies
                                    three critical
                                    phenomena: superposition, entanglement, and quantum interference. <br>
                                    <b>• Superposition</b> allows qubits to exist in multiple states (both 0 and 1
                                    simultaneously)
                                    rather than being confined to a single binary state. This gives quantum computers
                                    the
                                    power to process vast amounts of information in parallel.<br>

                                    <b>• Entanglement</b> is a quantum phenomenon where qubits become interconnected in
                                    such a way that the state of one qubit is directly related to the state of another,
                                    even when separated by large distances.This allows for instantaneous data sharing
                                    between qubits and is one of the key factors behind the immense computational
                                    potential of quantum systems. <br>
                                    <b>• Quantum interference</b> is used to amplify the correct outcomes of
                                    computations
                                    and
                                    diminish errors, making quantum systems highly efficient at solving complex
                                    problems. <br>
                                    <b>Why Quantum Computing Matters?</b> The potential applications of quantum
                                    computing are vast and could reshape many
                                    sectors: <br>
                                    <b>• Cryptography:</b> Quantum computers could break the encryption algorithms
                                    currently
                                    used to secure digital communication. However, they also offer the ability to
                                    develop
                                    quantum-safe encryption methods, ensuring secure information transfer in the
                                    quantum era. <br>
                                    <b>• Drug Discovery and Healthcare:</b>Quantum computing's ability to model
                                    molecular
                                    structures with extraordinary precision could lead to breakthroughs in drug discover
                                    personalized medicine, and understanding diseases at a molecular level. <br>
                                    <b>• Artificial Intelligence (AI) and Machine Learning (ML): </b>Quantum computing
                                    could accelerate the training of machine learning models, enabling AI systems to
                                    learn
                                    and adapt at a much faster rate. This could lead to advancements in everything from
                                    autonomous vehicles to real-time data analysis. <br>
                                    <b> • Logistics and Supply Chain: </b>With its capacity to optimize complex
                                    systems, quantum computing could dramatically improve logistics, supply chains,
                                    and even financial markets by solving optimization problems that are beyond the
                                    reach of classical computers. <br>
                                    <b>• Material Science:</b> Quantum computers could aid in the discovery of new
                                    materials by
                                    accurately simulating their atomic structures, potentially leading to innovations
                                    in energy storage, semiconductors, and manufacturing. <br>

                                    <b> Current Challenges:</b>
                                    Despite its promise, quantum computing is still in its infancy. <br>One of the
                                    biggest
                                    challenges is <b>maintaining quantum coherence,</b> where qubits remain stable long
                                    enough
                                    to perform meaningful computations. Quantum systems are also prone to errors due to
                                    environmental factors like temperature fluctuations and electromagnetic
                                    interference. To
                                    address this, researchers are working on quantum error correction techniques and
                                    improving the physical hardware of quantum computers. <br>
                                    Another significant challenge is <b>scalability</b>. Current quantum computers have
                                    only a
                                    few
                                    dozen qubits, and while this is sufficient for experimental purposes, large-scale
                                    quantum
                                    computation requires thousands or even millions of qubits. <br>

                                    <b>Conclusion</b> <br>
                                    Quantum computing is not just an advancement in technology; it represents a paradigm
                                    shift in how we approach computation and problem-solving. While classical computing
                                    will remain essential for everyday tasks, quantum computing will open new frontiers,
                                    unlocking the potential for unprecedented innovation across multiple industries. As
                                    we
                                    stand on the brink of this revolution, the future of technology looks brighter—and
                                    more quantum—than ever.

                                    <br>


                                </p>

                            </div>
                            <button class="read-more" onclick="toggleReadMore('teacher8-more', this)">Read More</button>
                        </div>
                    </div>
                </div>`,
];

const studentPages = [
    `<div class="article-page">

                    
                   <div class="article-card">
                <header>
                    <h2>5G Technology- A New Era of Wireless World</h2>
                    <p class="author">By: <span>Ankit Kumar(Passed out 2023)</span></p>
                    <img src="image/article/student/ankitkr.jpeg" alt="Ankit Kumar" class="author-img">
                </header>
                <div class="article-content">
                    <p>Wireless technology has steadily become a bigger presence in most people's everyday lives.
                        Whether it's at work, at home, at a stadium, or even in auto vehicles, people rely on
                        wireless
                        tech for information, entertainment, communication, and more. </p>
                    <div class="more-text" id="student1-more">
                        <p>In the past few years, a new name escalated very fast in wireless technology, "5G". It
                            means
                            a 5th generation mobile network. It is a new global wireless standard after 1G, 2G, 3G,
                            and
                            4G networks which enable a new kind of network that is designed to connect virtually
                            everyone and everything together, including machines, objects, and devices. This
                            technology
                            is meant to deliver higher multi-Gbps peak data speeds, ultra-low latency, more
                            reliability,
                            massive network capacity, increased availability, and a more uniform user experience to
                            more
                            users. <br>
                            Besides its objectives, when we look at its technical enhancements, we observe that 5G
                            is
                            based on OFDM (orthogonal frequency-division multiplexing), a method of modulating a
                            digital
                            signal across several different channels to reduce interference. It uses a 5G NR air
                            interface alongside OFDM principles and uses wider bandwidth technologies such as sub-6
                            GHz
                            and mmWave. When we deep dive into the band of 5G, the primary technologies include:
                            <br>
                            <span>&#8226;</span>Millimeter wave bands (26, 28, 38, and 60 GHz) are 5G and offer
                            performance as high as
                            20 gigabits per second but with low range coverage. <br>
                            <span>&#8226;</span>"Low-band 5G" and "mid-band 5G" use frequencies from 600 MHz to 6
                            GHz, especially
                            3.5-4.2 GHz, offering better speed along with better range coverage. <br>
                            <span>&#8226;</span>Massive MIMO (multiple input multiple output - 64-256 antennas)
                            offers performance "up
                            to ten times current 4G networks." <br>
                            Through a landmark 5G economy study, we found that 5G's full economic effect will likely
                            be
                            realized across the globe by 2035—supporting a wide range of industries and potentially
                            enabling up to $13.1 trillion worth of goods and services. This impact is much greater
                            than
                            in previous network generations. <br>
                            The development requirements of the new 5G network are also expanding beyond the
                            traditional
                            mobile networking players to sectors such as the automotive industry, smart healthcare,
                            smart cities, virtual reality (VR), the IoT, and artificial intelligence (AI). A
                            defining
                            capability of 5G is that it is designed for forward compatibility—the ability to
                            flexibly
                            support future services that are unknown today.
                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student1-more', this)">Read More</button>
                </div>
            </div>
                    

                   <div class="article-card">
                <header>
                    <h2>Wireless "Electronic Skin"</h2>
                    <p class="author">By: <span>Srijani Som(Passed out 2024)</span></p>
                    <img src="image/article/student/srijani.jpeg" alt="Srijani Som" class="author-img">
                </header>
                <div class="article-content">
                    <p>Wireless technology is one of the most advanced upgrades occurring in today's world. Wearable
                        sensors transmit information about a person's glucose concentrations, blood pressure, heart
                        rate, and activity levels effortlessly from the sensor to a smartphone for additional
                        analysis.
                    </p>
                    <div class="more-text" id="student2-more">
                        <p>Recently, one of the major stories that found its way to some of the most recent
                            headlines is
                            the new chip-free electronic skin produced by a research team at MIT. The team's novel
                            sensor design, which was published in Science, is a flexible 'e-skin,' a semiconducting
                            membrane that adapts to the skin like electronic Scotch tape. <br>

                            The sensor's heart is composed of an ultrathin, high-quality gallium nitride sheet
                            material
                            that allows it to generate electrical signals under mechanical strain and vibrate in
                            response to an electric impulse. The pattern of waves from the vibration can help
                            identify
                            the material and compounds present in the body. <br>


                            "If there is any change in the pulse, or chemicals in sweat, or even ultraviolet
                            exposure to
                            the skin, all of this activity can change the <b>pattern of surface acoustic waves on
                                the
                                gallium nitride film," says Yeongin Kim.</b> "And the sensitivity of our film is so
                            high
                            that it
                            can detect these changes." <br>
                            You might think that a chip requires a lot of power, but this is not the case. The MIT
                            researchers ensured that the gadget could make a system incredibly light without using
                            any
                            power-hungry components. The project instills a deep analysis from the perspective and
                            concept of material engineering being used. Previously, the research team was involved
                            in
                            developing remote epitaxy technology. This methodology's primary goal is to produce and
                            peel
                            away ultrathin, high-quality semiconductors from graphene-coated wafers. Indeed, they
                            have
                            already used these methods to develop and test a variety of flexible, multifunctional
                            electronic films. <br>

                            While creating this e-skin, they used remote epitaxy to peel away ultrathin
                            single-crystalline layers of gallium nitride. Gallium nitride was chosen because it can
                            act
                            as a sensor and a wireless communicator. So, they filmed it. When gallium nitride and
                            gold
                            are combined, the gold gets deposited in the shape of repeated dumbbells—a lattice-like
                            structure that gives the typically stiff metal some flexibility. The gallium nitride and
                            gold sample, which they consider electronic skin, is just 250nm thick. <br>
                            The gadget detected and wirelessly communicated variations in the surface acoustic waves
                            of
                            gallium nitride on participants' skin that were connected to their heart rate. The
                            research
                            team sees the results as the first step toward chip-free wireless sensors and envisions
                            employing the device in conjunction with other selective membranes to measure additional
                            target indications like cortisol, a hormone linked to stress levels.

                        </p>
                        <div class="art-img">

                            <img src="image/article/used photo/ss.jpeg" alt="Wireless" class="article-img">

                        </div>
                    </div>
                    <button class="read-more" onclick="toggleReadMore('student2-more', this)">Read More</button>
                </div>
            </div>

                </div>`,
                `<div class="article-page" >
                <div class="article-card">
      <header>
          <h2>Entrepreneurship</h2>
          <p class="author">By: <span>Yash Gupta(Passed out 2024)</span></p>
          <img src="image/article/student/yashgupta.jpg" alt="Yash Gupta" class="author-img">
      </header>
      <div class="article-content">
          <p>We fear that so-and-so is an entrepreneur who built their own company. But what exactly does being an
              entrepre- neur or possessing entrepreneurship skills mean? Entrepreneurship can be understood as the
              readiness to start a venture or dive deeper and create something independently. </p>
          <div class="more-text" id="student3-more">
              <p>Formally the definition goes as starting developing or operating a business enterprise. Now,
                  running this organization can be profit oriented or for social causes. You might have heard
                  about commercial enterprises like Mcdonalds' and charitable enterprises like Red Cross. <br>
                  Often heard, Entrepreneurs are innovators, and financial experts are risk-takers. It is true but
                  is not complete. It's not always about taking risks but clutching with calculated risks or new
                  ideas rather than an intuitive mindset. Most Entrepreneurs have this mindset to avoid being in
                  the rat race and work for their growth. One can run an enterprise if he possesses this mentality
                  of working for their benefit <br>
                  Entrepreneurs are vital to any economy because they have the knowledge and drive to foresee
                  requirements, sell viable new ideas, and solve problems. Indeed they get rewarded with profits,
                  fame, and continued growth opportunities. Quality like versatility, flexibility, resilience,
                  communication and focus are predominant for a start-up to succeed. Many challenges like getting
                  funding, hiring talents, and bureaucra- cy come across, but once you dive deeper and strive to
                  win, these sides apart and are patient, you will see success coming to you in no time
              </p>

          </div>
          <button class="read-more" onclick="toggleReadMore('student3-more', this)">Read More</button>
      </div>
  </div>

  <!-- Student Article 2 -->
  <div class="article-card">
      <header>
          <h2>"IoT: Internet of Things"</h2>
          <p class="author">By: <span>Kanchi Venkata Mahith(Passed out 2023)</span></p>
          <img src="image/article/student/kanchi.jpg" alt="Kanchi Venkata" class="author-img">
      </header>
      <div class="article-content">
          <p> On a rush day at work, you may feel tired and desire a
              hot water bath to relieve stress and cool your room
              upon reaching home. These things seem impossible,
              but are they possible? There is no doubt in my mind
              that the answer is yes.
          </p>
          <div class="more-text" id="student4-more">
              <p> All these actions are possible by the Actuators; those
                  can be accessible by remote control. This technology
                  can be accessed worldwide. The above things can
                  only be possible by the new technology called &quot;
                  IoT,&quot; i.e., the Internet of Things. <br>

                  It is “ The network of physical objects that contain
                  embedded technology to communicate
                  and interact with their internal states or the external
                  environment.” <br>
                  <b>Components or Architecture of IoT:</b> <br>
                  <b>• IoT device:</b>  Using sensors that can be wired or wireless to gather information from multiple
                  sources.
                  <br>
                  <b>• IoT gateway:</b> Integrate multiple IoT devices and collect data from them.
                  <br>
                  <b>• Network:</b>
                  Network is the bridging element that connects an array of IoT gateways to the cloud
                  platform by traditional TCP/IP network.
                  <br>
                  <b>• Cloud:</b>  A platform that connects to the internet and
                  analyses the data. 
                  <br>
                  <b>• Applications:</b> Synthesised data for the end user to derive meaningful
                  insights.
                  <br>
                  <b>Applications of IoT:</b> <br>
                  The advancements in the IoT made the technology can be applied in numerous applications like 
                 Smart homes ( Home Automation), Industrial IoT, Smart-Cities, Connected Cars, Healthcare, 
                 Supply chains, Agriculture, Defence, Smart grid, Retail, etc <br>
               <b>  Future scope of IoT:</b>
                 Despite its rapid growth, the Internet of Things is still in its infancy. Adding IoT to a career
                 path has opened up a world of possibilities beyond what we could have imagined. IoT applica
                tions are increasing interest, which is good news for us all. More people will be connected to the 
                Internet of Things throughout the world as a result of IoT. <br>
                 The world will turn out to be a much-enhanced place to live. There will be exponential growth in 
                the number of IoT-connected devices ranging from parking spaces to houses, refrigerators, etc.
                 The “ Internet of things ” is bringing ever more things into the digital mode daily, which would,
                 in the near future, turn into IoT, a multi-trillion industry. Technical experts predict that in the
                 next 5-10 years, the world will see a big boom for IoT.





              </p>
             
          </div>
          <button class="read-more" onclick="toggleReadMore('student4-more', this)">Read More</button>
      </div>
  </div>
          </div>`,
    `<div class="article-page">
        <div class="article-card">
            <header>
                <h2>India's 76,000-cr’s Master Plan <br>
                    For Semiconductor Industry- Future of Semiconductor Industry in India</h2>
                <p class="author">By: <span>Vikas Jonwal(Passed out 2024)</span></p>
                <img src="image/article/student/vikas.jpg" alt="Vikas jonwal" class="author-img">
            </header>
            <div class="article-content">
                <p> In furtherance of the vision of Aatmanirbhar Bharat and positioning India as the global hub for
                    Electronic System
                    Design and Manufacturing, the Union Cabinet chaired by Hon’ble Prime Minister Shri Narendra Modi has
                    approved the comprehensive program for the development of sustainable semiconductor and display
                    ecosys
                    tem in the country. </p>
                <div class="more-text" id="student5-more">
                    <p> By offering a globally competitive incentive package to businesses engaged in the production of
                        semiconduc
                        tors, displays, and other electronic components as well as design, the programme will usher in a
                        new era in
                        electronics manufacturing. This will open the door for India to assume the lead in terms of
                        technology and
                        economic independence in these crucial strategic areas. <br>
                        <b> Current Scnerio of Semiconductor Industry in India :</b> <br>
                        The Union government’s Semicon India Programme, set up to build the semiconductor and display
                        ecosystem
                        in the country, has generated large scale interest among companies with proposals of more than
                        ₹1.53 lakh
                        crore received in the first round which closed on 15 February 2022 <br>
                        Five proposals for semiconductor and display fabs have been received with total investment
                        nearing $20.5
                        billion or ₹153,750 crore, According to MeitY. <br>
                        Semiconductors in india are likely to fulfil the country's need for semiconductors & display
                        fabs. In 2020, the
                        Indian semiconductor market size was $15 billion (approx.) and is expected to reach $63 billion
                        by 2026 with a
                        CAGR of 27.2%. <br>
                        There are 966 Semiconductor Companies in india in which the top companies are
                        NXP Semiconductors, Faststream Technologies, Samsung Semiconductors.
                        <br>
                        <b> Future of Semiconductor Industry in India </b>
                        The Indian government has decided to clear the semiconductor incentive scheme by devoting INR
                        76,000 crore
                        to bypass the problems with the semiconductors shortage, According to this new policy, the
                        Indian government
                        has decided to help witness the construction of 20+ semiconductor components manufacturing,
                        design, and
                        display units over the period of the next 6 years. <br>
                        India's own semiconductor consumption is anticipated to reach $80 billion by 2026 and $110
                        billion by 2030.This
                        requires a domestic ecosystem that can sustain supply without the need to depend on volatile
                        global supply
                        chains. <br>
                        According to the Indian semiconductor association, the market size of the semiconductor industry
                        grew by a
                        CAGR of 29.4% from 2015 - 2020. <br>
                        Vedanta Ltd and Taiwan's Foxconn signed an agreement on Tuesday with Gujarat, to set up a $20
                        billion
                        semiconductor project. The ₹ 1.54 lakh crore investment by Vedanta and Foxconn will be used to
                        set up India's
                        first semiconductor production plant, a display fab unit, and a semiconductor assembling and
                        testing unit.
                        India's Tata Group enters semiconductor market with $90bn investment over next 5 years and will
                        begin
                        producing semiconductors in the country within a few years, a move that the chairman of the
                        group's main
                        company said will make the South Asian country a key part of global chip supply chains.
                    </p>

                </div>
                <button class="read-more" onclick="toggleReadMore('student5-more', this)">Read More</button>
            </div>
        </div>

        <!-- Student Article 2 -->
        <div class="article-card">
            <header>
                <h2>EMBEDDED SYSTEMS</h2>
                <p class="author">By: <span>Amulya Priya(Finaly Year 2025)</span></p>
                <img src="image/article/student/amulya.jpg" alt="Amulya" class="author-img">
            </header>
            <div class="article-content">
                <p> An Embedded system is a combination of
                    software and hardware to perform a specific task.
                    A controller is built into an application that
                    continuously monitors the process variables and
                    makes sure that the process variable does not
                    deviate from the main task. In case of deviation or
                    violation, it will produce a counteract signal to
                    bring the process variable into the main event. It is
                    the amalgamation of all the technology in the
                    world such as Software Programming, Digital
                    Electronics, Mobile Computing etc.
                </p>
                <div class="more-text" id="student6-more">
                    <p> <b> EMBEDDED CONTROL SYSTEMS</b> <br>
                        The embedded system is very powerful, fast, and small size in nature so that it can easily fix
                        other systems and perform their task. The embedded system can be categorized as a
                        computer system, but they do not perform the operations performed by computer systems.
                        The embedded systems can be used in mobile phones, medical devices, or any other
                        manufacturing equipment. Various operations and functions can be performed by embed
                        ded systems and used to control smaller parts of a larger system. The embedded system is
                        generally a combination of software and hardware system and other components parts so
                        that a particular operation can be executed.<br>
                        <b> FUTURE OF EMBEDDED SYSTEMS:</b>

                        <br> As embedded systems is a mix of programming systems for both software and hardware,
                        it is the part of computer and electronics. The future of embedded systems lies in the
                        advancing all the communication. With growth and advancements in the field of electronics,
                        wireless communications, networking, cognitive and affective computing and robotics,
                        devices around you communicate in more ways than you ever imagined. Those times are
                        not very distant when every object around us will have a small processor/sensor embedded
                        within itself, invisible to us but still communicating with all other devices around, making our
                        lives more connected and accessible than ever before. <br>





                    </p>

                </div>
                <button class="read-more" onclick="toggleReadMore('student6-more', this)">Read More</button>
            </div>
        </div>
    </div>`,
    `<div class="article-page">
            <div class="article-card">
                <header>
                    <h2>SMART STEP TECHNOLOGY</h2>
                    <p class="author">By: <span>Siddharth Rusiya(Final Yr 2025)</span></p>
                    <img src="image/article/student/siddarath.jpg" alt="Siddharth" class="author-img">
                </header>
                <div class="article-content">
                    <p> The insole-based wearable sensor (SmartStep) has its
                        electronics fully embedded into a generic insole, which is
                        usable with a large variety of shoes and, thus, resolves
                        the need for shoe modification. Shoe-mounted wearable
                        sensors can be used in applications, such as activity
                        monitoring, gait analysis, post-stroke rehabilitation, body
                        weight measurements, and energy expenditure studies. </p>
                    <div class="more-text" id="student7-more">
                        <p> The Smart Step is an always-on electronic device that comprises a 3D accelerometer, a
                            3D gyroscope, and resistive pressure sensors implemented around system-on-chip
                            with an 8051-processor core, Bluetooth low energy (BLE) connectivity, and flash
                            memory buffer. The Smart Step is wirelessly interfaced with an Android smartphone
                            application with data logging and visualization capabilities. Several tests are conducted
                            on this technology that illustrates the power consumption for several possible usage
                            scenarios and the reliability of the data retention method. The results of the
                            mechanical reliability test on the Smart Step indicate that the pressure sensors in the
                            Smart Step tolerated prolonged human wear. The Smart Step system collects more
                            than 98.5% of the sensor data, in real usage scenarios, having intermittent connectivity
                            with the smartphone. The current implementation of the Android application (App) is
                            based on Google’s most recent Android version 4.4.2. The app can scan for available
                            SmartStep servers, connect to the server, search for the available services from the
                            server, read/write characteristic variables in the server and enable/disable
                            notifications from the server. <br></p>
                        <div class="art-img">

                            <img src="image/article/used photo/sr.jpg" alt="Smart Step Technology" class="article-img">

                        </div>
                        <p>
                            The app user can select whether the data retention mechanism is needed for the data
                            logging session and also whether the SmartStep needs to read the gyroscope or not.
                            During the session, the sensor data notified by the SmartStep can be displayed on the
                            screen in real-time. In other words, utilizing the SmartStep technology is the beginning
                            of a new era in technology


                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student7-more', this)">Read More</button>
                </div>
            </div>

            <!-- Student Article 2 -->
            <div class="article-card">
                <header>
                    <h2> ORGANIC ELECTRONICS </h2>
                    <p class="author">By: <span>Shivam Srivas (Passed out 2024)</span></p>
                    <img src="image/article/student/shivam srivas.jpg" alt="Shivam Srivas" class="author-img">
                </header>
                <div class="article-content">
                    <p> Organic electronics is a field of research and technology
                        that uses organic materials, primarily carbon-based
                        compounds, in the development of electronic devices.
                        Organic semiconductors are the core building blocks of
                        organic electronics, which enable them to transport
                        charge carriers when an electric field is applied.
                        Examples of organic semiconductors include small
                        organic molecules like pentacene and polymeric
                        materials like polythiophene.
                    </p>
                    <div class="more-text" id="student8-more">
                        <p> Organic electronics encompass a wide range of devices,
                            including transistors, light-emitting diodes (LEDs), solar
                            cells, sensors, and memory devices. <br>
                            Here are some key organic electronic devices: <br>
                            <b>1. Organic Transistors:</b> Organic field-effect transistors (OFETs) are fundamental
                            building blocks in organic
                            electronics. They consist of a thin organic semiconductor layer sandwiched between two
                            electrodes. By
                            applying a voltage to the gate electrode, the conductivity of the organic semiconductor can
                            be
                            modulated, controlling the flow of current through the device. <br>
                            <b>2. Organic Light-Emitting Diodes (OLEDs):</b> OLEDs are thin-film devices that emit light
                            when an electric
                            current is passed through them. They consist of organic layers sandwiched between two
                            electrodes, with
                            the organic layers containing emissive organic molecules or polymers. OLEDs offer advantages
                            such as
                            high contrast, wide color gamut, and low power consumption, and they are used in displays,
                            lighting, and
                            signage. <br>
                            <b>3. Organic Photovoltaics (OPVs):</b> OPVs, also known as organic solar cells, convert
                            sunlight into electricity.
                            They typically consist of a blend of organic donor and acceptor materials that absorb
                            photons and
                            generate electron-hole pairs. OPVs offer advantages such as flexibility, lightweight, and
                            the potential for
                            low-cost production, making them suitable for applications like solar-powered devices,
                            building
                            integrated photovoltaics, and portable electronics. <br>
                            <b>4. Organic Sensors: </b> Organic materials can be used to develop sensors for various
                            applications. For
                            example, organic field-effect transistors can be utilised as chemical or biological sensors
                            by
                            functionalizing their surfaces to selectively detect specific analytes. Organic sensors have
                            potential
                            applications in healthcare, environmental monitoring, and wearable technology. <br>
                            <b>5. Organic Memories: </b> Organic memory devices utilise organic materials to store and
                            retrieve digital
                            information. These devices can be based on various mechanisms, such as resistive switching
                            or charge
                            trapping in organic materials, and they offer the potential for low-cost and flexible memory
                            solutions.
                            <br>





                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student8-more', this)">Read More</button>
                </div>
            </div>
        </div>`,
    ` <div class="article-page">
            <div class="article-card">
                <header>
                    <h2> IoT In Indian Education System</h2>
                    <p class="author">By: <span>Gaurav Kumar(Pre-Final Yr 2026)</span></p>
                    <img src="image/article/student/gaurav.jpg" alt="Siddharth" class="author-img">
                </header>
                <div class="article-content">
                    <p> IoT stands for Internet of Things. It refers to a group
                        of interconnected hardware devices embedded with
                        sensors, software and that have connectivity
                        capabilities that enable them to collect and exchange
                        data over the Internet. In the field of education, IoT
                        can enhance the learning experience, personalised
                        learning, improve safety and security, and optimise
                        campus management. IoT technology has the
                        potential to significantly impact the education sector
                        by introducing innovative and interactive learning
                        experiences. </p>
                    <div class="more-text" id="student9-more">
                        <p> <b>Application of IoT in Education System:</b>
                            Let's have a look at some of the topics in the
                            education system where IoT can have an impact <br>
                            <b> 1. Smart Classroom:- </b>A smart classroom is an innovative learning environment that
                            integrates technology to
                            enhance the teaching and learning experience. IoT enables the creation of smart classrooms
                            equipped
                            with connected devices and sensors. These device can collect data on various parameters like
                            temperature, noise level, lighting, providing a more comfortable and productive learning
                            environment. <br>
                            <b>2. Personalised Learning :-</b> IoT generates personalised learning and can address the
                            diverse need, interest,
                            and learning style of the students. It promotes individualised instructions, engagement and
                            self-paced
                            learning, ultimately leading to improve learning outcomes and students' success. <br>
                            <b> 3. Remote Learning:- </b>IoT devices, such as webcams, smart board, and virtual reality
                            (VR)headsets, can
                            enable remote learning experiences. Students can access educational resources from anywhere
                            in this
                            world. <br>
                            <b>4. Smart Campus Management:-</b> IoT technology can revolutionise campus management by
                            providing real
                            time monitoring and automation. IoT connected sensors can monitor energy consumption,
                            optimise
                            resource allocation , and automate maintenance processes, leading to cost savings and more
                            effective
                            operations. <br>
                            <b>5. Safety and Security:-</b> IoT devices can enhance safety and security measures on
                            campuses. Smart
                            surveillance system can monitor premises, detect unauthorised access, and send alert in
                            real-time.
                            Wearable devices can track students’ locations during field trips or emergencies, ensuring
                            their safety. <br>
                            6. IoT can give <b>hands-on experiences</b> through robotics, coding, and programming. <br>
                            7. IoT can facilitate communication among teachers, parents and students. <br>
                            8. IoT can also <b>help physically disabled students</b> in learning through their own way.
                            It provide personalised
                            support to those type of students. <br>


                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student9-more', this)">Read More</button>
                </div>
            </div>

            <!-- Student Article 2 -->
            <div class="article-card">
                <header>
                    <h2> Smart Irrigation Technology </h2>
                    <p class="author">By: <span>Neha Sahu (Pre-Final Yr 2026)</span></p>
                    <img src="image/article/student/neha.jpg" alt="Neha" class="author-img">
                </header>
                <div class="article-content">
                    <p> New controllers of smart irrigation technology are designed to
                        offer even greater precision and efficiency than earlier models.
                        These controllers offer several key features and benefits,
                        including:
                    </p>
                    <div class="more-text" id="student10-more">
                        <p> 1. Advanced weather monitoring <br>
                            2. Real-time data visualisation <br>
                            3. Automatic scheduling <br>
                            4. Wireless connectivity <br>
                            5. Integration with other smart devices <br>
                            Overall, new controllers of smart irrigation technology are
                            bringing significant improvements in precision, efficiency, and
                            convenience to the world of agriculture and landscaping. <br>
                            New controllers of smart irrigation technology can be separated
                            into two main categories: Climate based controllers and soil
                            moisture based controllers. <br>
                            <b> Climate based controllers</b>
                            Climate-based controllers also referred to as evapotranspiration (ET) controllers use local
                            weather data to
                            adjust irrigation schedules. Evapotranspiration is the combination of evaporation from the
                            soil surface and
                            transpiration by plant materials. These climate-based controllers gather local weather
                            information and make
                            irrigation run-time adjustments so the landscape only receives the appropriate amount of
                            water.
                            <br>
                            There are three basic types of ET controllers: <br>
                            1.Signal-based controllers use meteorological data from a publicly available source and the ET value is
                            calculated for a grass surface at the site. The ET data is then sent to the controller by a wireless connection. <br>
                            2.Historic ET controllers use a pre-programmed water use curve, based on historic water use in different
                            regions. The curve can be adjusted for temperature and solar radiation. <br>
                            3. On-site weather measurement controllers use weather data collected on-site to calculate continuous ET
                            measurements and water accordingly. <br>
                           <b> Soil moisture sensor controllers</b> <br>
                            Soil moisture sensor controllers utilise a soil moisture sensor placed below ground in the root zone of lawns
                            to determine water needs. The soil moisture sensor estimates the soil volumetric water content. Volumetric
                            water content represents the portion of the total volume of soil occupied by water. The controllers can be
                            adjusted to open the valves and start irrigation once the volumetric water content reaches a user-defined
                            threshold.
                           





                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student10-more', this)">Read More</button>
                </div>
            </div>
        </div>`,
        `<div class="article-page">
            <div class="article-card">
                <header>
                    <h2> Industry 5.0 - The Next Frontier of Industrial
                        Transformation</h2>
                    <p class="author">By: <span> Utsav Kumar(Passed out 2024)</span></p>
                    <img src="image/article/student/utsav.jpg" alt="Utsav Kumar" class="author-img">
                </header>
                <div class="article-content">
                    <p> The concept of Industry 5.0 envisions the next phase of
                        industrial evolution beyond Industry 4.0, which is the current
                        era of the Fourth Industrial Revolution (4IR). Building on the
                        digitalization and automation of Industry 4.0, Industry 5.0 is
                        expected to further blur the lines between the physical and
                        digital worlds, ushering in a new era of innovation, productivity,
                        and sustainability. </p>
                    <div class="more-text" id="student11-more">
                        <p> <b>Key Characteristics of Industry 5.0:</b>
                            Let's have a look at some of the topics in the
                            education system where IoT can have an impact <br>
                            <b> 1. Human-Centric Approach: </b>While Industry 4.0 focused on increasing automation and
                            efficiency through smart technologies, Industry 5.0 is expected to reintegrate the
                            human element. <br>
                            <b>2. Advanced Automation: </b> Industry 5.0 will witness a significant advancement in
                            automation technologies, driven by the seamless interaction between humans and
                            machines. The integration of artificial intelligence, machine learning, and advanced
                            robotics will lead to more adaptive and agile manufacturing processes. <br>
                            <b> 3. Cyber-Physical Systems: </b>Industry 5.0 will bring forth an era of highly
                            interconnected
                            cyber-physical systems, where machines, devices, sensors, and humans communicate
                            and collaborate in real-time. <br>
                            <b>4. Sustainable Manufacturing:</b> With growing environmental concerns, Industry 5.0 is
                            expected to prioritize sustainability and green practices. The integration of renewable
                            energy sources, circular economy principles, and eco-friendly materials will pave the way
                            for more sustainable manufacturing processes and reduced carbon footprints. <br>
                            <b>5. Cutting-Edge Technologies:</b> Industry 5.0 will embrace and leverage emerging
                            technologies
                            such as nanotechnology, quantum computing, biotechnology, and advanced materials.
                            These technologies will revolutionize production techniques, materials design, and product
                            performance, opening new possibilities for various industries. <br>
                            <b>Conclusion:</b> Industry 5.0 merges human innovation and technology for global progress.
                            While we await the materialization of Industry 5.0, it is crucial for stakeholders,
                            policymakers, and industries to collaborate in shaping a future that balances economic
                            progress, social responsibility, and environmental sustainability.


                        </p>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student11-more', this)">Read More</button>
                </div>
            </div>

            <!-- Student Article 2 -->
            <div class="article-card">
                <header>
                    <h2>  5G TECHNOLOGY AND ITS IMPLICATIONS: UNLEASHING
                        THE POWER OF CONNECTIVITY
                        </h2>
                    <p class="author">By: <span> Preety Kumari (Final Yr 2025)</span></p>
                    <img src="image/article/student/preety.jpg" alt="Preety Kumari" class="author-img">
                </header>
                <div class="article-content">
                    <p> The advent of 5G technology is poised to redefine the
                        way we connect, communicate, and innovate. This fifth
                       generation wireless network promises an unprecedented
                        leap in speed, latency, and capacity, opening doors to a
                        multitude of possibilities across various sectors.
                    </p>
                    <div class="more-text" id="student12-more">
                        <p> 5G's implications in healthcare are profound. Remote surgeries, real-time patient
                            monitoring, and telemedicine will become more efficient and accessible,
                            potentially saving lives in critical situations. In transportation, autonomous
                            vehicles will benefit from near-instantaneous data transmission, enhancing
                            safety and navigation. <br>
                           
                            Smart cities will harness 5G's capabilities to manage traffic, optimise energy
                            consumption, and improve public services. Entertainment and gaming
                            experiences will reach new heights with seamless augmented reality and virtual
                            reality applications. Nonetheless, as 5G proliferates, concerns about data security
                            and privacy loom large. Safeguarding sensitive information and ensuring network
                            integrity will be paramount. In conclusion, 5G technology promises a future of
                            unparalleled connectivity and innovation. Embracing it responsibly, with an eye
                            on security, will be key to unlocking its full potential. As 5G networks roll out
                            worldwide, we stand on the brink of a new era of connectivity and possibility. <br>





                        </p>
                        <div class="art-img">

                            <img src="image/article/used photo/pk.jpg" alt="5G" class="article-img">

                        </div>

                    </div>
                    <button class="read-more" onclick="toggleReadMore('student12-more', this)">Read More</button>
                </div>
            </div>
        </div>`,
];

// Function to create pagination and display content
function createPagination(pages, contentId, paginationId) {
    const contentDiv = document.getElementById(contentId);
    const paginationDiv = document.getElementById(paginationId);

    function displayPage(index) {
        contentDiv.innerHTML = pages[index];
        updateButtons(index);
    }

    function updateButtons(currentIndex) {
        paginationDiv.innerHTML = "";
        pages.forEach((_, index) => {
            const button = document.createElement("button");
            button.textContent = ` ${index + 1}`;
            button.classList.toggle("active", index === currentIndex);
            button.addEventListener("click", () => displayPage(index));
            paginationDiv.appendChild(button);
        });
    }

    // Initialize the first page
    displayPage(0);
}

// Initialize pagination for teacher and student articles
createPagination(teacherPages, "teacher-content", "teacher-pagination");
createPagination(studentPages, "student-content", "student-pagination");


