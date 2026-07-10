import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLaptop, FaClock, FaCheckCircle, FaStar, FaPlay, FaTrophy, 
  FaBookOpen, FaUser, FaChevronRight, FaChevronLeft, FaUndo, FaFileAlt 
} from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

// Question Banks
const JEE_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following quantities has dimensions different from the other three?",
    options: [
      "Work done by a force",
      "Product of voltage and charge",
      "Kinetic Energy",
      "Power"
    ],
    correctAnswer: 3,
    explanation: "Work, Kinetic Energy, and the product of voltage and charge (V * q = Electrical Energy) all represent energy and have dimensions of [ML²T⁻²]. Power represents energy per unit time and has dimensions of [ML²T⁻³], which is different."
  },
  {
    id: 2,
    question: "If force F is given by F = at + bt², where t is time, what are the dimensions of the constants a and b?",
    options: [
      "[MLT⁻³] and [MLT⁻⁴]",
      "[MLT⁻⁴] and [MLT⁻³]",
      "[MLT⁻¹] and [MLT⁻²]",
      "[MLT⁻²] and [MLT⁻¹]"
    ],
    correctAnswer: 0,
    explanation: "By the principle of homogeneity, dimensions of F must equal dimensions of (at) and (bt²). Since [F] = [MLT⁻²], we have: [a][T] = [MLT⁻²] => [a] = [MLT⁻³]. Also, [b][T²] = [MLT⁻²] => [b] = [MLT⁻⁴]."
  },
  {
    id: 3,
    question: "The value of limit (x → 0) of sin(x)/x (where x is in radians) is:",
    options: [
      "0",
      "1",
      "Infinity",
      "Undefined"
    ],
    correctAnswer: 1,
    explanation: "According to standard calculus limits, lim (x → 0) sin(x)/x is a fundamental trigonometric limit that evaluates to 1. This can also be proven using L'Hopital's rule, differentiating the numerator and denominator to get cos(x)/1, which equals 1 as x approaches 0."
  },
  {
    id: 4,
    question: "The equation of trajectory of a projectile is y = 10x - (5/9)x². If g = 10 m/s², the angle of projection is:",
    options: [
      "tan⁻¹(10)",
      "tan⁻¹(5/9)",
      "tan⁻¹(1/2)",
      "45 degrees"
    ],
    correctAnswer: 0,
    explanation: "The trajectory equation is y = x tan(θ) - gx² / (2u² cos²(θ)). Comparing y = 10x - (5/9)x² with this standard form, the coefficient of x is tan(θ) = 10. Therefore, the angle of projection θ is tan⁻¹(10)."
  },
  {
    id: 5,
    question: "If a square matrix A is both symmetric and skew-symmetric, then A must be a:",
    options: [
      "Diagonal matrix",
      "Null matrix",
      "Identity matrix",
      "Triangular matrix"
    ],
    correctAnswer: 1,
    explanation: "For a symmetric matrix, Aᵀ = A. For a skew-symmetric matrix, Aᵀ = -A. Therefore, A = -A, which implies 2A = O (where O is the zero matrix). Thus, A = O (the null matrix)."
  }
]

const NEET_QUESTIONS = [
  {
    id: 1,
    question: "The basic unit of biological classification is:",
    options: [
      "Species",
      "Genus",
      "Family",
      "Order"
    ],
    correctAnswer: 0,
    explanation: "Species is the basic, lowest, and primary unit of biological classification, representing a group of individuals that are morphologically similar and capable of interbreeding to produce fertile offspring."
  },
  {
    id: 2,
    question: "Which of the following cell organelles is referred to as the 'Powerhouse of the Cell'?",
    options: [
      "Ribosome",
      "Lysosome",
      "Mitochondria",
      "Golgi Apparatus"
    ],
    correctAnswer: 2,
    explanation: "Mitochondria are called the powerhouses of the cell because they are the primary sites of aerobic respiration and synthesize energy in the form of ATP (Adenosine Triphosphate) molecules."
  },
  {
    id: 3,
    question: "Double fertilization is a characteristic evolutionary feature of which plant group?",
    options: [
      "Gymnosperms",
      "Angiosperms",
      "Pteridophytes",
      "Bryophytes"
    ],
    correctAnswer: 1,
    explanation: "Double fertilization is a complex fertilization mechanism unique to angiosperms (flowering plants). It involves the joining of a female gametophyte with two male gametes, resulting in a diploid zygote and a triploid endosperm."
  },
  {
    id: 4,
    question: "Which of the following hormones is widely known as the 'Pregnancy Hormone'?",
    options: [
      "Estrogen",
      "Progesterone",
      "Luteinizing Hormone (LH)",
      "Follicle Stimulating Hormone (FSH)"
    ],
    correctAnswer: 1,
    explanation: "Progesterone is called the pregnancy hormone because it is essential for maintaining the uterine lining (endometrium) necessary for implantation of the fertilized egg and support of early embryogenesis."
  },
  {
    id: 5,
    question: "What is the normal, slightly basic pH range of human arterial blood?",
    options: [
      "6.2 - 6.4",
      "7.35 - 7.45",
      "8.2 - 8.5",
      "5.5 - 5.9"
    ],
    correctAnswer: 1,
    explanation: "Human arterial blood pH is tightly regulated by homeostatic buffers to remain slightly alkaline, typically between 7.35 and 7.45. Any major deviation can lead to acidosis or alkalosis, which are life-threatening."
  }
]

const BOARD_10_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following is a balanced chemical equation for the respiration process?",
    options: [
      "C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy",
      "C6H12O6 + O2 → CO2 + H2O",
      "C6H12O6 → 2C2H5OH + 2CO2",
      "CO2 + H2O → C6H12O6 + O2"
    ],
    correctAnswer: 0,
    explanation: "Respiration is an exothermic chemical reaction where glucose combines with oxygen in our cells to produce carbon dioxide, water, and energy. The balanced equation is C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy."
  },
  {
    id: 2,
    question: "A concave mirror produces a real image of size 3 times that of the object. If the object is placed at 10 cm in front of the mirror, where is the image located?",
    options: [
      "-30 cm",
      "+30 cm",
      "-15 cm",
      "+15 cm"
    ],
    correctAnswer: 0,
    explanation: "Magnification m = -v/u. For a real image, m is negative, so m = -3. We are given u = -10 cm (using sign convention). Therefore, -3 = -v/(-10) => v = -30 cm. The image is located 30 cm in front of the mirror."
  },
  {
    id: 3,
    question: "Which of the following solutions will turn red litmus paper blue?",
    options: [
      "Lemon juice",
      "Vinegar",
      "Baking soda solution",
      "Hydrochloric acid"
    ],
    correctAnswer: 2,
    explanation: "Basic or alkaline solutions turn red litmus paper blue. Baking soda (sodium hydrogen carbonate) is a basic salt and its solution in water is alkaline. Lemon juice, vinegar, and hydrochloric acid are acidic and would turn blue litmus red."
  },
  {
    id: 4,
    question: "If the current flowing through a fixed resistor is doubled, the heat produced in it will become:",
    options: [
      "Double",
      "Half",
      "Four times",
      "One-fourth"
    ],
    correctAnswer: 2,
    explanation: "According to Joule's law of heating, H = I²Rt. Since heat produced (H) is directly proportional to the square of the current (I²), doubling the current (2I) will increase the heat produced by (2)² = 4 times."
  },
  {
    id: 5,
    question: "Which plant hormone is primarily responsible for the ripening of fruits?",
    options: [
      "Auxin",
      "Gibberellin",
      "Cytokinin",
      "Ethylene"
    ],
    correctAnswer: 3,
    explanation: "Ethylene is a gaseous plant hormone that plays a crucial role in initiating and accelerating the ripening of fruits, as well as stimulating leaf and flower senescence and abscission."
  }
]

const BOARD_12_QUESTIONS = [
  {
    id: 1,
    question: "What is the SI unit of electric flux?",
    options: [
      "Volt * meter (V m)",
      "Newton per Coulomb (N/C)",
      "Weber (Wb)",
      "Tesla * meter² (T m²)"
    ],
    correctAnswer: 0,
    explanation: "Electric flux Φ = E * A. The unit of E is V/m and Area is m², so the unit of Φ is (V/m) * m² = V m (Volt * meter). It can also be expressed as N m²/C."
  },
  {
    id: 2,
    question: "The dry cell is an example of which of the following electrochemical cells?",
    options: [
      "Primary cell",
      "Secondary cell",
      "Fuel cell",
      "Concentration cell"
    ],
    correctAnswer: 0,
    explanation: "A dry cell (Leclanche cell) is a primary cell because the chemical reaction occurs only once, and after a period of use, it becomes dead and cannot be recharged or reused."
  },
  {
    id: 3,
    question: "According to Raoult's law, the relative lowering of vapor pressure of a dilute solution is equal to:",
    options: [
      "Mole fraction of the solvent",
      "Mole fraction of the solute",
      "Molarity of the solution",
      "Molality of the solution"
    ],
    correctAnswer: 1,
    explanation: "Raoult's law states that for a solution of non-volatile solutes, the relative lowering of vapor pressure (P° - P)/P° is directly equal to the mole fraction of the solute (x_solute) in the solution."
  },
  {
    id: 4,
    question: "For a first-order chemical reaction, what is the correct unit of the rate constant (k)?",
    options: [
      "mol L⁻¹ s⁻¹",
      "L mol⁻¹ s⁻¹",
      "s⁻¹",
      "L² mol⁻² s⁻¹"
    ],
    correctAnswer: 2,
    explanation: "For a first-order reaction, Rate = k[A]¹. Therefore, k = Rate / [A] = (mol L⁻¹ s⁻¹) / (mol L⁻¹) = s⁻¹ (per second)."
  },
  {
    id: 5,
    question: "The relation between focal length (f) and radius of curvature (R) for a spherical mirror of small aperture is:",
    options: [
      "f = R",
      "f = R / 2",
      "f = 2R",
      "f = 3R / 2"
    ],
    correctAnswer: 1,
    explanation: "For a spherical mirror of small aperture, the focal point lies exactly midway between the pole and the center of curvature. Therefore, the focal length is half the radius of curvature: f = R / 2."
  }
]

const OnlineTest = () => {
  // Test Simulator State
  const [isTesting, setIsTesting] = useState(false)
  const [examType, setExamType] = useState('JEE') // 'JEE' or 'NEET'
  const [questions, setQuestions] = useState(JEE_QUESTIONS)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({}) // { questionIdx: optionIdx }
  const [markedForReview, setMarkedForReview] = useState({}) // { questionIdx: boolean }
  const [visited, setVisited] = useState({ 0: true }) // { questionIdx: boolean }
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [testSubmitted, setTestSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Countdown timer hook
  useEffect(() => {
    let timer
    if (isTesting && !testSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            handleSubmitTest(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isTesting, testSubmitted, timeLeft])

  const startTest = (type) => {
    setExamType(type)
    let selectedQuestions = JEE_QUESTIONS
    if (type === 'BOARD_10') selectedQuestions = BOARD_10_QUESTIONS
    else if (type === 'BOARD_12') selectedQuestions = BOARD_12_QUESTIONS
    else if (type === 'NEET') selectedQuestions = NEET_QUESTIONS
    
    setQuestions(selectedQuestions)
    setCurrentIdx(0)
    setAnswers({})
    setMarkedForReview({})
    setVisited({ 0: true })
    setTimeLeft(300)
    setTestSubmitted(false)
    setIsTesting(true)
  }

  const handleOptionSelect = (optionIdx) => {
    setAnswers({ ...answers, [currentIdx]: optionIdx })
  }

  const clearResponse = () => {
    const newAnswers = { ...answers }
    delete newAnswers[currentIdx]
    setAnswers(newAnswers)
    
    const newMarked = { ...markedForReview }
    delete newMarked[currentIdx]
    setMarkedForReview(newMarked)
  }

  const saveAndNext = () => {
    // If not at last question, advance
    if (currentIdx < questions.length - 1) {
      const nextIdx = currentIdx + 1
      setCurrentIdx(nextIdx)
      setVisited({ ...visited, [nextIdx]: true })
    }
  }

  const markForReviewAndNext = () => {
    setMarkedForReview({ ...markedForReview, [currentIdx]: true })
    if (currentIdx < questions.length - 1) {
      const nextIdx = currentIdx + 1
      setCurrentIdx(nextIdx)
      setVisited({ ...visited, [nextIdx]: true })
    }
  }

  const navigateToQuestion = (idx) => {
    setCurrentIdx(idx)
    setVisited({ ...visited, [idx]: true })
  }

  const handleSubmitTest = (auto = false) => {
    if (!auto && !window.confirm("Are you sure you want to submit the exam?")) {
      return
    }

    // Calculate score: JEE/NEET pattern +4 for correct, -1 for incorrect, 0 for unattempted
    let calculatedScore = 0
    const isBoard = examType.startsWith('BOARD')
    questions.forEach((q, idx) => {
      const userAns = answers[idx]
      if (userAns !== undefined) {
        if (userAns === q.correctAnswer) {
          calculatedScore += isBoard ? 1 : 4
        } else {
          calculatedScore -= isBoard ? 0 : 1
        }
      }
    })

    setScore(calculatedScore)
    setTestSubmitted(true)
  }

  const getQuestionStatusClass = (idx) => {
    const hasAnswered = answers[idx] !== undefined
    const isMarked = markedForReview[idx]
    const isVisited = visited[idx]

    if (isMarked) return 'bg-purple-600 text-white border-purple-700'
    if (hasAnswered) return 'bg-green-600 text-white border-green-700'
    if (isVisited) return 'bg-orange-500 text-white border-orange-600'
    return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
  }

  const getStatusText = (idx) => {
    const hasAnswered = answers[idx] !== undefined
    const isMarked = markedForReview[idx]
    const isVisited = visited[idx]

    if (isMarked) return 'Marked'
    if (hasAnswered) return 'Answered'
    if (isVisited) return 'Not Answered'
    return 'Not Visited'
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const features = [
    {
      icon: FaLaptop,
      title: 'Real Exam Interface',
      description: 'Practice with an interface similar to actual competitive exams.'
    },
    {
      icon: FaClock,
      title: 'Timed Tests',
      description: 'All tests are timed to simulate real exam conditions.'
    },
    {
      icon: FaCheckCircle,
      title: 'Instant Results',
      description: 'Get detailed analysis and results immediately after the test.'
    },
    {
      icon: FaStar,
      title: 'Performance Tracking',
      description: 'Track your progress with detailed analytics and insights.'
    },
  ]

  const testPackages = [
    {
      name: 'JEE Main Test Series',
      tests: '20 Full Tests + 50 Part Tests',
      price: '₹2,999',
      features: ['Chapter-wise tests', 'All India ranking', 'Detailed solutions', 'Performance analysis']
    },
    {
      name: 'NEET Test Series',
      tests: '20 Full Tests + 50 Part Tests',
      price: '₹2,999',
      features: ['Subject-wise tests', 'National ranking', 'NCERT-based questions', 'Doubt support']
    },
    {
      name: 'Foundation Test Series',
      tests: '30 Tests',
      price: '₹1,499',
      features: ['Class 8-10 coverage', 'Olympiad pattern', 'Concept-based questions', 'Progress tracking']
    },
  ]

  return (
    <>
      {/* Dynamic Header State */}
      {!isTesting ? (
        <>
          {/* Default Online Test Landing Page */}
          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <span className="px-4 py-1.5 bg-primary/10 text-primary dark:text-secondary rounded-full text-sm font-semibold mb-4 inline-block">
                  Coaching CBT Simulator
                </span>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                  Online Test Platform
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Acclimatize to national competitive environments. Practice with our custom CBT interface.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <Section>
            <SectionHeader
              title="Why Choose Our Test Series?"
              subtitle="Key Features"
              description="Our online test platform offers the best practice experience for competitive exams."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="text-center h-full">
                    <feature.icon className="text-4xl text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Test Packages */}
          <Section gradient>
            <SectionHeader
              title="Test Packages"
              subtitle="Choose Your Plan"
              description="Select the test series that suits your preparation needs."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full flex flex-col justify-between">
                    <div className="text-center mb-6">
                      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{pkg.tests}</p>
                      <div className="text-3xl font-bold text-primary dark:text-secondary">{pkg.price}</div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Buy Now</Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Free Demo Test Launch Section */}
          <Section dark>
            <div className="max-w-6xl mx-auto text-center">
              <FaPlay className="text-5xl text-yellow-400 mx-auto mb-4 animate-pulse" />
              <h3 className="font-heading font-bold text-3xl text-white mb-3">
                Interactive Mock Test Practice
              </h3>
              <p className="text-gray-350 text-base max-w-2xl mx-auto mb-10">
                Choose a demo category to experience our real-time Computer-Based Test (CBT) simulator. Responsive on all devices.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                  {
                    type: 'BOARD_10',
                    title: 'Class 10th Board Mock',
                    subject: 'Science & Mathematics',
                    duration: '5 Mins',
                    questions: '5 Qs',
                    marks: '+1 / 0'
                  },
                  {
                    type: 'BOARD_12',
                    title: 'Class 12th Board Mock',
                    subject: 'Physics & Chemistry',
                    duration: '5 Mins',
                    questions: '5 Qs',
                    marks: '+1 / 0'
                  },
                  {
                    type: 'JEE',
                    title: 'JEE Main Practice Mock',
                    subject: 'Physics & Mathematics',
                    duration: '5 Mins',
                    questions: '5 Qs',
                    marks: '+4 / -1'
                  },
                  {
                    type: 'NEET',
                    title: 'NEET UG Practice Mock',
                    subject: 'Biology & Physics',
                    duration: '5 Mins',
                    questions: '5 Qs',
                    marks: '+4 / -1'
                  }
                ].map((testItem, idx) => (
                  <motion.div
                    key={testItem.type}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl flex flex-col justify-between h-full"
                  >
                    <div>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded font-bold uppercase tracking-wider block w-max mb-3 border border-primary/20">
                        {testItem.type.replace('_', ' ')}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white mb-1">
                        {testItem.title}
                      </h4>
                      <p className="text-gray-400 text-xs mb-4">
                        {testItem.subject}
                      </p>
                      <div className="grid grid-cols-3 gap-1 bg-gray-950/40 p-2.5 rounded-lg border border-gray-885 text-[10px] text-gray-500 mb-6 font-mono">
                        <div>
                          <span className="block text-gray-400 font-bold">Time</span>
                          {testItem.duration}
                        </div>
                        <div>
                          <span className="block text-gray-400 font-bold">Size</span>
                          {testItem.questions}
                        </div>
                        <div>
                          <span className="block text-gray-400 font-bold">Rule</span>
                          {testItem.marks}
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => startTest(testItem.type)} 
                      className="w-full !py-2 text-xs font-bold"
                      icon={FaPlay}
                    >
                      Start Test
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Login Placeholder */}
          <Section>
            <div className="max-w-md mx-auto">
              <Card>
                <div className="text-center mb-6">
                  <FaTrophy className="text-4xl text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Student Login
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Login to access your purchased test series and view results.
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                  />
                  <Button className="w-full">Login</Button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account?{' '}
                    <a href="#" className="text-primary dark:text-secondary hover:underline">
                      Register here
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </Section>
        </>
      ) : (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!testSubmitted ? (
                <motion.div
                  key="active-test"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6"
                >
                  {/* Test Navigation Header */}
                  <div className="lg:col-span-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-805 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                    <div>
                      <span className="font-heading font-bold text-lg text-gray-900 dark:text-white">
                        {examType === 'BOARD_10' 
                          ? 'Class 10th Board Practice Portal' 
                          : examType === 'BOARD_12' 
                            ? 'Class 12th Board Practice Portal' 
                            : examType === 'JEE' 
                              ? 'JEE Main 2026 Practice Portal' 
                              : 'NEET UG 2026 Practice Portal'}
                      </span>
                      <span className="ml-4 px-3 py-1 bg-primary/10 text-primary dark:text-blue-300 text-xs rounded-full font-medium">
                        {examType.startsWith('BOARD') ? 'Board Marking (+1 / 0)' : 'Standard Marking (+4 / -1)'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-mono font-bold border border-red-100 dark:border-red-900/30">
                      <FaClock className="animate-spin text-sm" />
                      <span>TIME LEFT: {formatTime(timeLeft)}</span>
                    </div>
                  </div>

                  {/* Question Box */}
                  <div className="lg:col-span-3 flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-805 p-6 sm:p-8 rounded-2xl min-h-[500px] shadow-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
                        <span className="font-heading font-semibold text-gray-500 dark:text-gray-400">
                          Question {currentIdx + 1} of {questions.length}
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                          Status: {getStatusText(currentIdx)}
                        </span>
                      </div>

                      <h2 className="font-heading font-semibold text-xl text-gray-900 dark:text-white mb-6 leading-relaxed text-left">
                        {questions[currentIdx].question}
                      </h2>

                      <div className="space-y-4 text-left">
                        {questions[currentIdx].options.map((option, idx) => (
                          <label
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={`flex items-center p-4 rounded-xl border transition-all cursor-pointer ${
                              answers[currentIdx] === idx
                                ? 'bg-primary/5 dark:bg-primary/10 border-primary text-primary dark:text-white font-semibold shadow-sm'
                                : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 border text-xs font-semibold ${
                              answers[currentIdx] === idx
                                ? 'bg-primary text-white border-primary'
                                : 'bg-gray-100 dark:bg-gray-800 border-gray-350 dark:border-gray-700 text-gray-550'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Button Operations */}
                    <div className="flex flex-wrap items-center justify-between border-t border-gray-100 dark:border-gray-805 pt-6 mt-8 gap-4">
                      <div className="flex space-x-2">
                        <Button 
                          onClick={clearResponse} 
                          variant="outline" 
                          size="md" 
                          icon={FaUndo}
                          className="!px-4 !py-2.5 text-xs sm:text-sm border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                        >
                          Clear Response
                        </Button>
                        <Button 
                          onClick={markForReviewAndNext} 
                          variant="secondary" 
                          size="md"
                          className="!px-4 !py-2.5 text-xs sm:text-sm bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          Mark for Review & Next
                        </Button>
                      </div>

                      <div className="flex space-x-2">
                        {currentIdx > 0 && (
                          <Button 
                            onClick={() => navigateToQuestion(currentIdx - 1)} 
                            variant="outline" 
                            size="md" 
                            icon={FaChevronLeft}
                            className="!px-4 !py-2.5 text-xs sm:text-sm border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            Back
                          </Button>
                        )}
                        <Button 
                          onClick={saveAndNext} 
                          size="md"
                          icon={currentIdx === questions.length - 1 ? null : FaChevronRight}
                          iconPosition="right"
                          className="!px-4 !py-2.5 text-xs sm:text-sm"
                        >
                          {currentIdx === questions.length - 1 ? 'Save Details' : 'Save & Next'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Navigation Panel */}
                  <div className="lg:col-span-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-805 p-6 rounded-2xl flex flex-col justify-between min-h-[500px] shadow-sm">
                    <div>
                      {/* Candidate Box */}
                      <div className="flex items-center space-x-3 border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                          <FaUser />
                        </div>
                        <div className="text-left">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Candidate</div>
                          <div className="text-sm font-semibold text-gray-800 dark:text-white">Demo Student</div>
                        </div>
                      </div>

                      {/* Summary Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-6 text-left">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3.5 h-3.5 bg-green-600 rounded flex-shrink-0" />
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Answered ({Object.keys(answers).length})</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3.5 h-3.5 bg-purple-600 rounded flex-shrink-0" />
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Marked ({Object.keys(markedForReview).length})</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3.5 h-3.5 bg-orange-500 rounded flex-shrink-0" />
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Not Answered ({Object.keys(visited).length})</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3.5 h-3.5 bg-gray-100 dark:bg-gray-800 border border-gray-250 dark:border-gray-700 rounded flex-shrink-0" />
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono font-semibold">Unvisited ({questions.length - Object.keys(visited).length})</span>
                        </div>
                      </div>

                      {/* Question Grid */}
                      <h4 className="font-heading font-bold text-xs text-gray-800 dark:text-white mb-3 text-left uppercase tracking-wider font-mono">
                        Question Palette:
                      </h4>
                      <div className="grid grid-cols-5 gap-2">
                        {questions.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => navigateToQuestion(idx)}
                            className={`w-9 h-9 rounded-xl font-heading font-bold text-sm flex items-center justify-center transition-all ${
                              currentIdx === idx 
                                ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900 scale-105' 
                                : ''
                            } ${getQuestionStatusClass(idx)}`}
                          >
                            {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-6">
                      <Button 
                        onClick={() => handleSubmitTest(false)} 
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                        icon={FaCheckCircle}
                      >
                        Submit Test
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="max-w-4xl mx-auto mt-6"
                >
                  <Card className="text-center p-8 border-t-8 border-t-green-600 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800">
                    <FaTrophy className="text-6xl text-yellow-500 mx-auto mb-4 animate-bounce" />
                    <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                      Test Submitted Successfully!
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                      Here is your detailed exam performance analysis report.
                    </p>

                    {/* Stats Dashboard */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-left">
                      <div className="bg-gray-50 dark:bg-gray-850 p-4 rounded-2xl border border-gray-150 dark:border-gray-800">
                        <div className="text-2xl font-bold text-primary">
                          {score} / {examType.startsWith('BOARD') ? 5 : 20}
                        </div>
                        <div className="text-xs text-gray-405 mt-1 uppercase tracking-wider font-mono">Total Score</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-850 p-4 rounded-2xl border border-gray-150 dark:border-gray-800">
                        <div className="text-2xl font-bold text-green-600">
                          {questions.filter((q, idx) => answers[idx] === q.correctAnswer).length} Correct
                        </div>
                        <div className="text-xs text-gray-405 mt-1 uppercase tracking-wider font-mono">Right Choices</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-850 p-4 rounded-2xl border border-gray-150 dark:border-gray-800">
                        <div className="text-2xl font-bold text-red-500">
                          {questions.filter((q, idx) => answers[idx] !== undefined && answers[idx] !== q.correctAnswer).length} Incorrect
                        </div>
                        <div className="text-xs text-gray-450 mt-1 uppercase tracking-wider font-mono">Wrong Choices</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-850 p-4 rounded-2xl border border-gray-150 dark:border-gray-800">
                        <div className="text-2xl font-bold text-gray-550 dark:text-gray-300">
                          {questions.filter((_, idx) => answers[idx] === undefined).length} Unattempted
                        </div>
                        <div className="text-xs text-gray-450 mt-1 uppercase tracking-wider font-mono font-semibold">Left Blank</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                      <Button onClick={() => startTest(examType)} icon={FaUndo}>
                        Retake Practice Exam
                      </Button>
                      <Button onClick={() => setIsTesting(false)} variant="outline" icon={FaFileAlt} className="border-gray-250 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Exit Simulator
                      </Button>
                    </div>

                    {/* Explanations Section */}
                    <div className="text-left border-t border-gray-105 dark:border-gray-800 pt-8">
                      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center">
                        <FaBookOpen className="text-primary mr-2" /> Solutions & Answer Key
                      </h3>

                      <div className="space-y-6">
                        {questions.map((q, idx) => {
                          const userSelection = answers[idx]
                          const isCorrect = userSelection === q.correctAnswer
                          const isAttempted = userSelection !== undefined

                          return (
                            <div 
                              key={q.id} 
                              className={`p-5 rounded-2xl border ${
                                !isAttempted 
                                  ? 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/10' 
                                  : isCorrect 
                                    ? 'border-green-200 dark:border-green-950/20 bg-green-50/10 dark:bg-green-950/5' 
                                    : 'border-red-200 dark:border-red-950/20 bg-red-50/10 dark:bg-red-950/5'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <h4 className="font-heading font-semibold text-sm text-gray-900 dark:text-white">
                                  Q{q.id}. {q.question}
                                </h4>
                                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wider ${
                                  !isAttempted
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                    : isCorrect
                                      ? 'bg-green-150 text-green-700 dark:bg-green-950 dark:text-green-300'
                                      : 'bg-red-150 text-red-700 dark:bg-red-950 dark:text-red-300'
                                }`}>
                                  {!isAttempted 
                                    ? 'UNATTEMPTED (0)' 
                                    : isCorrect 
                                      ? `CORRECT (${examType.startsWith('BOARD') ? '+1' : '+4'})` 
                                      : `INCORRECT (${examType.startsWith('BOARD') ? '0' : '-1'})`}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm mb-4">
                                {q.options.map((opt, oIdx) => (
                                  <div 
                                    key={oIdx}
                                    className={`p-2.5 rounded-lg border ${
                                      oIdx === q.correctAnswer
                                        ? 'bg-green-50 dark:bg-green-955/35 border-green-305 dark:border-green-900 text-green-700 dark:text-green-300 font-semibold'
                                        : oIdx === userSelection
                                          ? 'bg-red-50 dark:bg-red-955/35 border-red-305 dark:border-red-900 text-red-700 dark:text-red-300 font-semibold'
                                          : 'border-gray-150 dark:border-gray-800 text-gray-500 dark:text-gray-400'
                                    }`}
                                  >
                                    {String.fromCharCode(65 + oIdx)}. {opt}
                                  </div>
                                ))}
                              </div>

                              <div className="bg-gray-50 dark:bg-gray-850 p-4 rounded-xl text-xs sm:text-sm border border-gray-150 dark:border-gray-800 leading-relaxed text-gray-655 dark:text-gray-350">
                                <span className="font-semibold text-primary block mb-1">Explanation:</span>
                                {q.explanation}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  )
}

export default OnlineTest
