const oldQuestions = [
    {
    id: 1,
    question:
      "Which of the following best defines the primary objective of project scope management?",
    options: [
      "Controlling project costs",
      "Establishing clear project boundaries and deliverables",
      "Minimizing schedule delays",
      "Enhancing team communication",
    ],
    answer: "Establishing clear project boundaries and deliverables",
    explanation:
      "Project scope management focuses on defining and controlling what is and isn’t included in the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 2,
    question:
      "You’re tasked with defining a project’s deliverables and exclusions. What is the most appropriate scope management process to use?",
    options: [
      "Scope Planning",
      "Scope Definition",
      "Scope Verification",
      "Scope Change Control",
    ],
    answer: "Scope Definition",
    explanation:
      "Scope Definition involves detailing the project deliverables and establishing boundaries, ensuring clarity on what is included and excluded.",
    categories: ["Project Scope Management"],
  },
  {
    id: 3,
    question:
      "In a situation where stakeholders continuously request additional features, which scope management technique should you employ?",
    options: [
      "Strict change control procedures",
      "Flexible budgeting",
      "Accelerated scheduling",
      "Enhanced resource allocation",
    ],
    answer: "Strict change control procedures",
    explanation:
      "Using strict change control helps prevent scope creep by formally reviewing and approving any changes to the project scope.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 4,
    question: "What is the primary purpose of cost management in a project?",
    options: [
      "To forecast and control project expenses",
      "To define project deliverables",
      "To manage stakeholder communication",
      "To sequence project activities",
    ],
    answer: "To forecast and control project expenses",
    explanation:
      "Cost management involves planning, estimating, budgeting, and controlling costs to ensure the project stays within budget.",
    categories: ["Cost Management"],
  },
  {
    id: 5,
    question:
      "During a project, unexpected expenses arise. Which cost management process would you use to manage these changes?",
    options: [
      "Cost Estimation",
      "Cost Budgeting",
      "Cost Control",
      "Cost Forecasting",
    ],
    answer: "Cost Control",
    explanation:
      "Cost Control is used to monitor and regulate the project budget, handling any variances or unexpected expenses.",
    categories: ["Cost Management"],
  },
  {
    id: 6,
    question:
      "You are reviewing a project’s cost performance and notice a significant variance from the baseline. What is the first step you should take?",
    options: [
      "Ignore the variance and continue",
      "Implement cost control measures",
      "Analyze the root cause of the variance",
      "Increase the project budget immediately",
    ],
    answer: "Analyze the root cause of the variance",
    explanation:
      "Understanding the reasons behind a cost variance is essential before deciding on corrective actions.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 7,
    question:
      "Which process in time management involves determining the order in which project activities should be performed?",
    options: [
      "Activity Sequencing",
      "Duration Estimating",
      "Schedule Development",
      "Resource Allocation",
    ],
    answer: "Activity Sequencing",
    explanation:
      "Activity Sequencing is the process of determining the order of activities to ensure the project schedule is logical and efficient.",
    categories: ["Time Management"],
  },
  {
    id: 8,
    question:
      "In a situation where a project deadline is at risk due to delays, what is the best immediate action to recover the schedule?",
    options: [
      "Scope reduction",
      "Schedule compression techniques",
      "Budget increase",
      "Quality reassessment",
    ],
    answer: "Schedule compression techniques",
    explanation:
      "Techniques like crashing or fast tracking help shorten the project schedule without altering the project scope.",
    categories: ["Time Management"],
  },
  {
    id: 9,
    question:
      "When estimating the duration of project tasks, which of the following techniques is most appropriate?",
    options: [
      "Analogous estimating",
      "Quality audits",
      "Risk assessment",
      "Stakeholder analysis",
    ],
    answer: "Analogous estimating",
    explanation:
      "Analogous estimating uses historical data from similar projects to predict the duration of current project tasks.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 10,
    question:
      "What is the key objective of quality management within a project?",
    options: [
      "Minimizing project costs",
      "Ensuring that project deliverables meet stakeholder requirements",
      "Reducing project duration",
      "Increasing project scope",
    ],
    answer: "Ensuring that project deliverables meet stakeholder requirements",
    explanation:
      "Quality management ensures that the project deliverables are fit for purpose and meet the agreed-upon standards.",
    categories: ["Quality Management"],
  },
  {
    id: 11,
    question:
      "You notice a recurring defect in a project deliverable. What quality management process should be employed to address this issue?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control involves monitoring specific project results to determine if they comply with relevant quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 12,
    question:
      "A stakeholder reports that a delivered product does not meet expectations. Which approach best illustrates a situational response in quality management?",
    options: [
      "Immediately reassign the project team",
      "Review the quality management plan and perform corrective actions",
      "Increase the project budget",
      "Extend the project schedule indefinitely",
    ],
    answer: "Review the quality management plan and perform corrective actions",
    explanation:
      "Reviewing the plan and applying corrective actions ensures that the deliverables meet quality requirements without derailing the project.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 13,
    question: "What is the primary purpose of risk management in a project?",
    options: [
      "To eliminate all potential risks",
      "To identify, assess, and mitigate risks",
      "To increase project scope",
      "To solely focus on opportunities",
    ],
    answer: "To identify, assess, and mitigate risks",
    explanation:
      "Risk management involves proactively identifying potential risks and taking steps to minimize their impact on the project.",
    categories: ["Risk Management"],
  },
  {
    id: 14,
    question:
      "During project execution, a new potential risk emerges. What should be your first step?",
    options: [
      "Ignore the risk until it becomes an issue",
      "Immediately update the risk register and assess the impact",
      "Change the project scope",
      "Inform all stakeholders without assessing the risk",
    ],
    answer: "Immediately update the risk register and assess the impact",
    explanation:
      "Updating the risk register and assessing the risk’s impact ensures that the team can develop an appropriate response plan.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 15,
    question:
      "Which of the following best describes procurement management in the context of project management?",
    options: [
      "Managing internal team resources",
      "Acquiring goods and services from external sources",
      "Developing project schedules",
      "Controlling project scope",
    ],
    answer: "Acquiring goods and services from external sources",
    explanation:
      "Procurement management focuses on obtaining products, services, or works from outside the organization.",
    categories: ["Procurement Management"],
  },
  {
    id: 16,
    question:
      "In a scenario where a supplier fails to deliver on time, what is the most appropriate procurement management action?",
    options: [
      "Terminate the contract immediately",
      "Review the contract terms and negotiate a resolution",
      "Ignore the delay",
      "Increase the project scope",
    ],
    answer: "Review the contract terms and negotiate a resolution",
    explanation:
      "Reviewing the contract and negotiating a solution helps manage supplier issues without causing project disruption.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 17,
    question: "What is the main goal of communication management in projects?",
    options: [
      "Ensuring effective information exchange among stakeholders",
      "Increasing project budgets",
      "Reducing project timelines",
      "Expanding project scope",
    ],
    answer: "Ensuring effective information exchange among stakeholders",
    explanation:
      "Communication management is all about ensuring that the right information is delivered to the right people at the right time.",
    categories: ["Communication Management"],
  },
  {
    id: 18,
    question:
      "A project team member is not receiving critical updates. What situational step should you take?",
    options: [
      "Assume the team member is not interested",
      "Review and update the communication plan to ensure inclusivity",
      "Delay all communications until the issue resolves itself",
      "Reassign the team member to another project",
    ],
    answer: "Review and update the communication plan to ensure inclusivity",
    explanation:
      "Adjusting the communication plan ensures all team members and stakeholders receive the necessary information.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 19,
    question:
      "What is a primary objective of stakeholder management in PMBOK® 7?",
    options: [
      "To manage stakeholder expectations and foster engagement",
      "To limit stakeholder interactions",
      "To centralize all decision-making within the project team",
      "To control project costs exclusively",
    ],
    answer: "To manage stakeholder expectations and foster engagement",
    explanation:
      "Stakeholder management focuses on identifying, engaging, and communicating with stakeholders to ensure their needs and expectations are met.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 20,
    question:
      "During a project, conflicting stakeholder priorities emerge. What is the best situational response?",
    options: [
      "Ignore the conflicts and hope they resolve themselves",
      "Facilitate a stakeholder meeting to discuss and align expectations",
      "Unilaterally decide based on the project manager’s preference",
      "Delay the project until all conflicts disappear",
    ],
    answer:
      "Facilitate a stakeholder meeting to discuss and align expectations",
    explanation:
      "Bringing stakeholders together to openly discuss their concerns promotes alignment and better project outcomes.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 21,
    question:
      "Which document is most critical for outlining a project's boundaries and deliverables?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Risk Register",
      "Communication Plan",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly defines the project’s deliverables, boundaries, and acceptance criteria, making it essential for scope management.",
    categories: ["Project Scope Management"],
  },
  {
    id: 22,
    question:
      "A project manager faces continuous additions to project requirements. Which technique is most effective to control this?",
    options: [
      "Implementing a change control process",
      "Increasing the project budget",
      "Expanding the team size",
      "Accelerating the project timeline",
    ],
    answer: "Implementing a change control process",
    explanation:
      "A formal change control process helps manage scope creep by ensuring all new requests are evaluated, approved, and documented.",
    categories: ["Project Scope Management"],
  },
  {
    id: 23,
    question:
      "What is the significance of creating a Work Breakdown Structure (WBS) in scope management?",
    options: [
      "It breaks down the project deliverables into manageable tasks",
      "It allocates the project budget to different tasks",
      "It establishes the project communication channels",
      "It defines the project risks",
    ],
    answer: "It breaks down the project deliverables into manageable tasks",
    explanation:
      "The WBS is a key tool that decomposes the project into smaller, manageable components, facilitating better planning and control.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 24,
    question:
      "Which tool is commonly used to monitor and control project expenditures?",
    options: [
      "Gantt Chart",
      "Earned Value Management (EVM)",
      "Risk Breakdown Structure",
      "Project Charter",
    ],
    answer: "Earned Value Management (EVM)",
    explanation:
      "EVM integrates cost, schedule, and scope to help project managers assess performance and predict future project performance.",
    categories: ["Cost Management"],
  },
  {
    id: 25,
    question:
      "When actual project spending exceeds the planned budget, what is the first process you should initiate?",
    options: [
      "Cost Estimation",
      "Cost Control",
      "Scope Verification",
      "Schedule Compression",
    ],
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring expenditures, analyzing variances, and taking corrective actions to keep the project on budget.",
    categories: ["Cost Management"],
  },
  {
    id: 26,
    question:
      "Which estimating technique uses historical data from similar projects to predict costs?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating relies on historical data and expert judgment from similar projects to estimate current project costs quickly.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 27,
    question:
      "Which diagram is most effective for visualizing the sequence and constraints of project activities?",
    options: [
      "Gantt Chart",
      "Network Diagram",
      "Fishbone Diagram",
      "Pareto Chart",
    ],
    answer: "Network Diagram",
    explanation:
      "A Network Diagram illustrates the logical sequence of activities and helps identify dependencies and potential scheduling constraints.",
    categories: ["Time Management"],
  },
  {
    id: 28,
    question:
      "When multiple tasks overlap, what scheduling method can be applied to optimize project duration?",
    options: ["Crashing", "Fast Tracking", "Resource Leveling", "Scope Creep"],
    answer: "Fast Tracking",
    explanation:
      "Fast Tracking involves overlapping tasks that were originally planned to be done sequentially, potentially shortening the overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 29,
    question:
      "What is the primary purpose of establishing milestones within a project schedule?",
    options: [
      "To identify key deliverables and decision points",
      "To assign project resources",
      "To detail project risks",
      "To define the project scope",
    ],
    answer: "To identify key deliverables and decision points",
    explanation:
      "Milestones mark significant points in the project timeline, helping track progress and facilitating decision-making.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 30,
    question:
      "Which quality management process involves regular reviews and audits to ensure standards are met?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance focuses on auditing and reviewing processes to ensure that quality standards are being followed throughout the project.",
    categories: ["Quality Management"],
  },
  {
    id: 31,
    question:
      "Which of the following elements is typically included in a quality management plan?",
    options: [
      "Project schedule and milestones",
      "Quality standards and metrics",
      "Stakeholder contact information",
      "Procurement contracts",
    ],
    answer: "Quality standards and metrics",
    explanation:
      "A quality management plan outlines the quality standards, procedures, and metrics to be used to assess project deliverables.",
    categories: ["Quality Management"],
  },
  {
    id: 32,
    question:
      "How can a project manager foster continuous improvement in quality management?",
    options: [
      "By conducting regular quality reviews and integrating feedback",
      "By reducing the project scope",
      "By increasing the budget significantly",
      "By extending the project deadline",
    ],
    answer: "By conducting regular quality reviews and integrating feedback",
    explanation:
      "Regular quality reviews coupled with feedback loops help identify improvement areas, ensuring that project processes evolve positively.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 33,
    question:
      "Which tool is widely used to identify and prioritize risks in a project?",
    options: ["SWOT Analysis", "Risk Matrix", "PERT Chart", "Gantt Chart"],
    answer: "Risk Matrix",
    explanation:
      "A Risk Matrix helps assess the probability and impact of risks, allowing project managers to prioritize which risks require immediate attention.",
    categories: ["Risk Management"],
  },
  {
    id: 34,
    question:
      "When a risk materializes during project execution, what is the most immediate process to undertake?",
    options: [
      "Update the project charter",
      "Execute the risk response plan",
      "Revise the project scope",
      "Increase the project budget",
    ],
    answer: "Execute the risk response plan",
    explanation:
      "Once a risk event occurs, executing the pre-planned risk response ensures that its impact is managed and mitigated promptly.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 35,
    question:
      "What is the main purpose of developing a procurement management plan?",
    options: [
      "To outline how goods and services will be acquired",
      "To manage project risks",
      "To define the project schedule",
      "To control project quality",
    ],
    answer: "To outline how goods and services will be acquired",
    explanation:
      "A procurement management plan details the processes for acquiring external resources, ensuring that procurement is systematic and aligned with project objectives.",
    categories: ["Procurement Management"],
  },
  {
    id: 36,
    question:
      "When evaluating vendor proposals, which of the following criteria is most important to consider?",
    options: [
      "Vendor reputation and past performance",
      "The color scheme of the proposal document",
      "The vendor's location",
      "The number of employees the vendor has",
    ],
    answer: "Vendor reputation and past performance",
    explanation:
      "A vendor’s reputation and historical performance are critical indicators of their ability to deliver quality goods or services on time.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 37,
    question:
      "How does a comprehensive communication management plan benefit a project?",
    options: [
      "It reduces the need for stakeholder engagement",
      "It ensures timely and effective information flow among all parties",
      "It primarily focuses on cost reduction",
      "It eliminates the need for meetings",
    ],
    answer:
      "It ensures timely and effective information flow among all parties",
    explanation:
      "A solid communication management plan ensures that all stakeholders receive accurate and timely information, which is crucial for project success.",
    categories: ["Communication Management"],
  },
  {
    id: 38,
    question:
      "In a scenario where key communication channels fail during a critical project phase, what should be your first action?",
    options: [
      "Pause the project indefinitely",
      "Implement a backup communication strategy",
      "Ignore the issue",
      "Reassign project roles",
    ],
    answer: "Implement a backup communication strategy",
    explanation:
      "Having a backup communication plan ensures continuity and prevents critical information from being lost during disruptions.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 39,
    question:
      "Which technique is most effective for identifying all relevant stakeholders at the beginning of a project?",
    options: [
      "Stakeholder Analysis",
      "Budget Forecasting",
      "Risk Assessment",
      "Schedule Compression",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis helps identify, categorize, and understand the influence of various stakeholders, ensuring they are appropriately managed throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 40,
    question:
      "When stakeholders have conflicting priorities, what strategy should a project manager adopt to maintain project progress?",
    options: [
      "Unilaterally decide on the project direction",
      "Facilitate a negotiation session to reach a consensus",
      "Ignore the conflicts and move forward",
      "Immediately reassign stakeholders to different projects",
    ],
    answer: "Facilitate a negotiation session to reach a consensus",
    explanation:
      "FacilitatingF a discussion among stakeholders helps resolve conflicts and align expectations, ensuring project objectives are met.",
    categories: ["Stakeholder Management"],
  },
  // Project Scope Management (3)
  {
    id: 41,
    question:
      "What is a primary advantage of using a detailed Work Breakdown Structure (WBS) in project planning?",
    options: [
      "It provides a clear breakdown of all deliverables and tasks",
      "It reduces overall project cost automatically",
      "It eliminates the need for stakeholder meetings",
      "It shortens the project timeline significantly",
    ],
    answer: "It provides a clear breakdown of all deliverables and tasks",
    explanation:
      "A detailed WBS clarifies all deliverables and tasks, facilitating better planning, tracking, and management of project scope.",
    categories: ["Project Scope Management"],
  },
  {
    id: 42,
    question:
      "In a scenario where the project scope is unclear, which action should a project manager take first?",
    options: [
      "Begin procurement immediately",
      "Conduct a detailed requirements gathering session with stakeholders",
      "Focus solely on cost management",
      "Schedule team-building activities",
    ],
    answer:
      "Conduct a detailed requirements gathering session with stakeholders",
    explanation:
      "Gathering detailed requirements helps clarify the project scope and sets a foundation for planning and control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 43,
    question:
      "Which method is most effective for validating the project scope with stakeholders?",
    options: [
      "Regular scope reviews and acceptance meetings",
      "Implementing cost control measures",
      "Relying solely on the project charter",
      "Skipping scope documentation to save time",
    ],
    answer: "Regular scope reviews and acceptance meetings",
    explanation:
      "Frequent reviews and acceptance meetings ensure that all stakeholders agree on the scope and any changes throughout the project.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 44,
    question:
      "Which cost estimation technique is best suited for early project phases with limited detailed data?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Three-Point Estimating",
      "Reserve Analysis",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating relies on historical data and expert judgment, making it useful in the early phases when detailed information is scarce.",
    categories: ["Cost Management"],
  },
  {
    id: 45,
    question:
      "If a project is running over budget, what immediate step should be taken in cost management?",
    options: [
      "Ignore the budget variance until the end of the project",
      "Analyze the variance and identify corrective measures",
      "Double the project budget",
      "Reduce project quality arbitrarily",
    ],
    answer: "Analyze the variance and identify corrective measures",
    explanation:
      "Understanding why the budget is exceeded helps determine corrective actions to bring the project back in line with the budget.",
    categories: ["Cost Management"],
  },
  {
    id: 46,
    question:
      "Which document is essential for outlining the cost baseline and tracking project expenses?",
    options: [
      "Project Schedule",
      "Cost Management Plan",
      "Scope Statement",
      "Risk Register",
    ],
    answer: "Cost Management Plan",
    explanation:
      "The Cost Management Plan defines how project costs will be planned, managed, and controlled, serving as the baseline for tracking expenses.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 47,
    question:
      "Which scheduling technique involves reducing the project duration by adding additional resources?",
    options: [
      "Crashing",
      "Fast Tracking",
      "Resource Leveling",
      "Critical Path Method",
    ],
    answer: "Crashing",
    explanation:
      "Crashing is a schedule compression technique that involves adding extra resources to critical tasks in order to shorten the overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 48,
    question:
      "A project manager is tasked with developing a detailed project schedule. Which document is most critical for this process?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Activity List",
      "Stakeholder Register",
    ],
    answer: "Activity List",
    explanation:
      "The Activity List details all tasks required for the project, serving as a foundation for developing an accurate schedule.",
    categories: ["Time Management"],
  },
  {
    id: 49,
    question:
      "How does the Critical Path Method (CPM) assist in project scheduling?",
    options: [
      "It identifies the longest sequence of tasks that determines the project duration",
      "It reduces the project budget automatically",
      "It determines the quality requirements for the project",
      "It eliminates the need for risk assessments",
    ],
    answer:
      "It identifies the longest sequence of tasks that determines the project duration",
    explanation:
      "The Critical Path Method identifies tasks that directly impact the project’s finish date, enabling targeted schedule management.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 50,
    question: "What is the focus of quality control in project management?",
    options: [
      "Ensuring processes are followed",
      "Inspecting deliverables for defects",
      "Establishing a project budget",
      "Scheduling project tasks",
    ],
    answer: "Inspecting deliverables for defects",
    explanation:
      "Quality control focuses on monitoring and measuring project deliverables to ensure they meet the defined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 51,
    question:
      "Which process is most effective for improving quality over the duration of the project?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Improvement",
    explanation:
      "Quality Improvement is an ongoing process aimed at continuously enhancing project processes and deliverables throughout the project lifecycle.",
    categories: ["Quality Management"],
  },
  {
    id: 52,
    question:
      "In a situation where quality issues are repeatedly identified, what should be the project manager’s first response?",
    options: [
      "Reevaluate the quality management plan and implement corrective actions",
      "Increase the project scope",
      "Ignore the issues until project closure",
      "Immediately change the project team",
    ],
    answer:
      "Reevaluate the quality management plan and implement corrective actions",
    explanation:
      "Reassessing the quality management plan and taking corrective actions helps resolve recurring issues and improve overall quality.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 53,
    question:
      "Which process in risk management involves assigning priorities to identified risks based on their impact and likelihood?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring and Control",
    ],
    answer: "Risk Analysis",
    explanation:
      "Risk Analysis involves evaluating risks to prioritize them, ensuring that the most significant threats are addressed first.",
    categories: ["Risk Management"],
  },
  {
    id: 54,
    question:
      "When a risk is identified as high impact and high probability, what is the most appropriate course of action?",
    options: [
      "Monitor it without further action",
      "Develop and implement a detailed risk response plan",
      "Assume it will not occur",
      "Transfer the risk without documentation",
    ],
    answer: "Develop and implement a detailed risk response plan",
    explanation:
      "High-impact, high-probability risks require immediate attention with a detailed response plan to mitigate or avoid negative outcomes.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 55,
    question:
      "Which of the following is a key output of the procurement planning process?",
    options: [
      "Procurement Statement of Work (SOW)",
      "Risk Register",
      "Communication Plan",
      "Project Schedule",
    ],
    answer: "Procurement Statement of Work (SOW)",
    explanation:
      "The Procurement SOW details the work required from vendors, serving as a foundational document for managing external procurement.",
    categories: ["Procurement Management"],
  },
  {
    id: 56,
    question:
      "A project team finds a vendor’s proposal to be below expectations. What is the best procurement action?",
    options: [
      "Reject the proposal outright",
      "Request clarification or revision from the vendor",
      "Ignore the proposal and choose another vendor immediately",
      "Adjust the project scope to accommodate the proposal",
    ],
    answer: "Request clarification or revision from the vendor",
    explanation:
      "Requesting further clarification helps determine if the proposal can be improved to meet the project’s requirements, rather than making an immediate rejection.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 57,
    question:
      "What is a key benefit of a well-documented communication plan in a project?",
    options: [
      "It eliminates all risks",
      "It ensures that information is distributed to the right stakeholders at the right time",
      "It reduces project costs significantly",
      "It removes the need for regular meetings",
    ],
    answer:
      "It ensures that information is distributed to the right stakeholders at the right time",
    explanation:
      "A communication plan outlines how and when information is shared, which is critical for keeping stakeholders informed and aligned.",
    categories: ["Communication Management"],
  },
  {
    id: 58,
    question:
      "If communication gaps lead to confusion on project deliverables, what should a project manager do first?",
    options: [
      "Overhaul the entire project plan",
      "Revisit and adjust the communication strategy",
      "Ignore stakeholder feedback",
      "Reduce the frequency of project updates",
    ],
    answer: "Revisit and adjust the communication strategy",
    explanation:
      "Adjusting the communication strategy helps address gaps and ensures clarity, improving overall stakeholder understanding.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 59,
    question:
      "Which process is crucial for identifying stakeholder interests and their influence on a project?",
    options: [
      "Stakeholder Identification",
      "Scope Definition",
      "Cost Estimation",
      "Quality Assurance",
    ],
    answer: "Stakeholder Identification",
    explanation:
      "Identifying stakeholders and understanding their interests is the first step in ensuring effective stakeholder management.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 60,
    question:
      "During a project, how should a project manager handle emerging conflicts between key stakeholders?",
    options: [
      "Delay addressing the conflict until the project ends",
      "Arrange a facilitated meeting to discuss and resolve differences",
      "Ignore the conflict and continue with project tasks",
      "Unilaterally make decisions without consulting stakeholders",
    ],
    answer: "Arrange a facilitated meeting to discuss and resolve differences",
    explanation:
      "A facilitated meeting allows stakeholders to express concerns and work collaboratively toward a resolution, maintaining project momentum.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 1,
    question:
      "Which of the following best defines the primary objective of project scope management?",
    options: [
      "Controlling project costs",
      "Establishing clear project boundaries and deliverables",
      "Minimizing schedule delays",
      "Enhancing team communication",
    ],
    answer: "Establishing clear project boundaries and deliverables",
    explanation:
      "Project scope management focuses on defining and controlling what is and isn’t included in the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 2,
    question:
      "You’re tasked with defining a project’s deliverables and exclusions. What is the most appropriate scope management process to use?",
    options: [
      "Scope Planning",
      "Scope Definition",
      "Scope Verification",
      "Scope Change Control",
    ],
    answer: "Scope Definition",
    explanation:
      "Scope Definition involves detailing the project deliverables and establishing boundaries, ensuring clarity on what is included and excluded.",
    categories: ["Project Scope Management"],
  },
  {
    id: 3,
    question:
      "In a situation where stakeholders continuously request additional features, which scope management technique should you employ?",
    options: [
      "Strict change control procedures",
      "Flexible budgeting",
      "Accelerated scheduling",
      "Enhanced resource allocation",
    ],
    answer: "Strict change control procedures",
    explanation:
      "Using strict change control helps prevent scope creep by formally reviewing and approving any changes to the project scope.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 4,
    question: "What is the primary purpose of cost management in a project?",
    options: [
      "To forecast and control project expenses",
      "To define project deliverables",
      "To manage stakeholder communication",
      "To sequence project activities",
    ],
    answer: "To forecast and control project expenses",
    explanation:
      "Cost management involves planning, estimating, budgeting, and controlling costs to ensure the project stays within budget.",
    categories: ["Cost Management"],
  },
  {
    id: 5,
    question:
      "During a project, unexpected expenses arise. Which cost management process would you use to manage these changes?",
    options: [
      "Cost Estimation",
      "Cost Budgeting",
      "Cost Control",
      "Cost Forecasting",
    ],
    answer: "Cost Control",
    explanation:
      "Cost Control is used to monitor and regulate the project budget, handling any variances or unexpected expenses.",
    categories: ["Cost Management"],
  },
  {
    id: 6,
    question:
      "You are reviewing a project’s cost performance and notice a significant variance from the baseline. What is the first step you should take?",
    options: [
      "Ignore the variance and continue",
      "Implement cost control measures",
      "Analyze the root cause of the variance",
      "Increase the project budget immediately",
    ],
    answer: "Analyze the root cause of the variance",
    explanation:
      "Understanding the reasons behind a cost variance is essential before deciding on corrective actions.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 7,
    question:
      "Which process in time management involves determining the order in which project activities should be performed?",
    options: [
      "Activity Sequencing",
      "Duration Estimating",
      "Schedule Development",
      "Resource Allocation",
    ],
    answer: "Activity Sequencing",
    explanation:
      "Activity Sequencing is the process of determining the order of activities to ensure the project schedule is logical and efficient.",
    categories: ["Time Management"],
  },
  {
    id: 8,
    question:
      "In a situation where a project deadline is at risk due to delays, what is the best immediate action to recover the schedule?",
    options: [
      "Scope reduction",
      "Schedule compression techniques",
      "Budget increase",
      "Quality reassessment",
    ],
    answer: "Schedule compression techniques",
    explanation:
      "Techniques like crashing or fast tracking help shorten the project schedule without altering the project scope.",
    categories: ["Time Management"],
  },
  {
    id: 9,
    question:
      "When estimating the duration of project tasks, which of the following techniques is most appropriate?",
    options: [
      "Analogous estimating",
      "Quality audits",
      "Risk assessment",
      "Stakeholder analysis",
    ],
    answer: "Analogous estimating",
    explanation:
      "Analogous estimating uses historical data from similar projects to predict the duration of current project tasks.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 10,
    question:
      "What is the key objective of quality management within a project?",
    options: [
      "Minimizing project costs",
      "Ensuring that project deliverables meet stakeholder requirements",
      "Reducing project duration",
      "Increasing project scope",
    ],
    answer: "Ensuring that project deliverables meet stakeholder requirements",
    explanation:
      "Quality management ensures that the project deliverables are fit for purpose and meet the agreed-upon standards.",
    categories: ["Quality Management"],
  },
  {
    id: 11,
    question:
      "You notice a recurring defect in a project deliverable. What quality management process should be employed to address this issue?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control involves monitoring specific project results to determine if they comply with relevant quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 12,
    question:
      "A stakeholder reports that a delivered product does not meet expectations. Which approach best illustrates a situational response in quality management?",
    options: [
      "Immediately reassign the project team",
      "Review the quality management plan and perform corrective actions",
      "Increase the project budget",
      "Extend the project schedule indefinitely",
    ],
    answer: "Review the quality management plan and perform corrective actions",
    explanation:
      "Reviewing the plan and applying corrective actions ensures that the deliverables meet quality requirements without derailing the project.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 13,
    question: "What is the primary purpose of risk management in a project?",
    options: [
      "To eliminate all potential risks",
      "To identify, assess, and mitigate risks",
      "To increase project scope",
      "To solely focus on opportunities",
    ],
    answer: "To identify, assess, and mitigate risks",
    explanation:
      "Risk management involves proactively identifying potential risks and taking steps to minimize their impact on the project.",
    categories: ["Risk Management"],
  },
  {
    id: 14,
    question:
      "During project execution, a new potential risk emerges. What should be your first step?",
    options: [
      "Ignore the risk until it becomes an issue",
      "Immediately update the risk register and assess the impact",
      "Change the project scope",
      "Inform all stakeholders without assessing the risk",
    ],
    answer: "Immediately update the risk register and assess the impact",
    explanation:
      "Updating the risk register and assessing the risk’s impact ensures that the team can develop an appropriate response plan.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 15,
    question:
      "Which of the following best describes procurement management in the context of project management?",
    options: [
      "Managing internal team resources",
      "Acquiring goods and services from external sources",
      "Developing project schedules",
      "Controlling project scope",
    ],
    answer: "Acquiring goods and services from external sources",
    explanation:
      "Procurement management focuses on obtaining products, services, or works from outside the organization.",
    categories: ["Procurement Management"],
  },
  {
    id: 16,
    question:
      "In a scenario where a supplier fails to deliver on time, what is the most appropriate procurement management action?",
    options: [
      "Terminate the contract immediately",
      "Review the contract terms and negotiate a resolution",
      "Ignore the delay",
      "Increase the project scope",
    ],
    answer: "Review the contract terms and negotiate a resolution",
    explanation:
      "Reviewing the contract and negotiating a solution helps manage supplier issues without causing project disruption.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 17,
    question: "What is the main goal of communication management in projects?",
    options: [
      "Ensuring effective information exchange among stakeholders",
      "Increasing project budgets",
      "Reducing project timelines",
      "Expanding project scope",
    ],
    answer: "Ensuring effective information exchange among stakeholders",
    explanation:
      "Communication management is all about ensuring that the right information is delivered to the right people at the right time.",
    categories: ["Communication Management"],
  },
  {
    id: 18,
    question:
      "A project team member is not receiving critical updates. What situational step should you take?",
    options: [
      "Assume the team member is not interested",
      "Review and update the communication plan to ensure inclusivity",
      "Delay all communications until the issue resolves itself",
      "Reassign the team member to another project",
    ],
    answer: "Review and update the communication plan to ensure inclusivity",
    explanation:
      "Adjusting the communication plan ensures all team members and stakeholders receive the necessary information.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 19,
    question:
      "What is a primary objective of stakeholder management in PMBOK® 7?",
    options: [
      "To manage stakeholder expectations and foster engagement",
      "To limit stakeholder interactions",
      "To centralize all decision-making within the project team",
      "To control project costs exclusively",
    ],
    answer: "To manage stakeholder expectations and foster engagement",
    explanation:
      "Stakeholder management focuses on identifying, engaging, and communicating with stakeholders to ensure their needs and expectations are met.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 20,
    question:
      "During a project, conflicting stakeholder priorities emerge. What is the best situational response?",
    options: [
      "Ignore the conflicts and hope they resolve themselves",
      "Facilitate a stakeholder meeting to discuss and align expectations",
      "Unilaterally decide based on the project manager’s preference",
      "Delay the project until all conflicts disappear",
    ],
    answer:
      "Facilitate a stakeholder meeting to discuss and align expectations",
    explanation:
      "Bringing stakeholders together to openly discuss their concerns promotes alignment and better project outcomes.",
    categories: ["Stakeholder Management"],
  },

  // Project Scope Management (3)
  {
    id: 21,
    question:
      "Which document is most critical for outlining a project's boundaries and deliverables?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Risk Register",
      "Communication Plan",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly defines the project’s deliverables, boundaries, and acceptance criteria, making it essential for scope management.",
    categories: ["Project Scope Management"],
  },
  {
    id: 22,
    question:
      "A project manager faces continuous additions to project requirements. Which technique is most effective to control this?",
    options: [
      "Implementing a change control process",
      "Increasing the project budget",
      "Expanding the team size",
      "Accelerating the project timeline",
    ],
    answer: "Implementing a change control process",
    explanation:
      "A formal change control process helps manage scope creep by ensuring all new requests are evaluated, approved, and documented.",
    categories: ["Project Scope Management"],
  },
  {
    id: 23,
    question:
      "What is the significance of creating a Work Breakdown Structure (WBS) in scope management?",
    options: [
      "It breaks down the project deliverables into manageable tasks",
      "It allocates the project budget to different tasks",
      "It establishes the project communication channels",
      "It defines the project risks",
    ],
    answer: "It breaks down the project deliverables into manageable tasks",
    explanation:
      "The WBS is a key tool that decomposes the project into smaller, manageable components, facilitating better planning and control.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 24,
    question:
      "Which tool is commonly used to monitor and control project expenditures?",
    options: [
      "Gantt Chart",
      "Earned Value Management (EVM)",
      "Risk Breakdown Structure",
      "Project Charter",
    ],
    answer: "Earned Value Management (EVM)",
    explanation:
      "EVM integrates cost, schedule, and scope to help project managers assess performance and predict future project performance.",
    categories: ["Cost Management"],
  },
  {
    id: 25,
    question:
      "When actual project spending exceeds the planned budget, what is the first process you should initiate?",
    options: [
      "Cost Estimation",
      "Cost Control",
      "Scope Verification",
      "Schedule Compression",
    ],
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring expenditures, analyzing variances, and taking corrective actions to keep the project on budget.",
    categories: ["Cost Management"],
  },
  {
    id: 26,
    question:
      "Which estimating technique uses historical data from similar projects to predict costs?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating relies on historical data and expert judgment from similar projects to estimate current project costs quickly.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 27,
    question:
      "Which diagram is most effective for visualizing the sequence and constraints of project activities?",
    options: [
      "Gantt Chart",
      "Network Diagram",
      "Fishbone Diagram",
      "Pareto Chart",
    ],
    answer: "Network Diagram",
    explanation:
      "A Network Diagram illustrates the logical sequence of activities and helps identify dependencies and potential scheduling constraints.",
    categories: ["Time Management"],
  },
  {
    id: 28,
    question:
      "When multiple tasks overlap, what scheduling method can be applied to optimize project duration?",
    options: ["Crashing", "Fast Tracking", "Resource Leveling", "Scope Creep"],
    answer: "Fast Tracking",
    explanation:
      "Fast Tracking involves overlapping tasks that were originally planned to be done sequentially, potentially shortening the overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 29,
    question:
      "What is the primary purpose of establishing milestones within a project schedule?",
    options: [
      "To identify key deliverables and decision points",
      "To assign project resources",
      "To detail project risks",
      "To define the project scope",
    ],
    answer: "To identify key deliverables and decision points",
    explanation:
      "Milestones mark significant points in the project timeline, helping track progress and facilitating decision-making.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 30,
    question:
      "Which quality management process involves regular reviews and audits to ensure standards are met?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance focuses on auditing and reviewing processes to ensure that quality standards are being followed throughout the project.",
    categories: ["Quality Management"],
  },
  {
    id: 31,
    question:
      "Which of the following elements is typically included in a quality management plan?",
    options: [
      "Project schedule and milestones",
      "Quality standards and metrics",
      "Stakeholder contact information",
      "Procurement contracts",
    ],
    answer: "Quality standards and metrics",
    explanation:
      "A quality management plan outlines the quality standards, procedures, and metrics to be used to assess project deliverables.",
    categories: ["Quality Management"],
  },
  {
    id: 32,
    question:
      "How can a project manager foster continuous improvement in quality management?",
    options: [
      "By conducting regular quality reviews and integrating feedback",
      "By reducing the project scope",
      "By increasing the budget significantly",
      "By extending the project deadline",
    ],
    answer: "By conducting regular quality reviews and integrating feedback",
    explanation:
      "Regular quality reviews coupled with feedback loops help identify improvement areas, ensuring that project processes evolve positively.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 33,
    question:
      "Which tool is widely used to identify and prioritize risks in a project?",
    options: ["SWOT Analysis", "Risk Matrix", "PERT Chart", "Gantt Chart"],
    answer: "Risk Matrix",
    explanation:
      "A Risk Matrix helps assess the probability and impact of risks, allowing project managers to prioritize which risks require immediate attention.",
    categories: ["Risk Management"],
  },
  {
    id: 34,
    question:
      "When a risk materializes during project execution, what is the most immediate process to undertake?",
    options: [
      "Update the project charter",
      "Execute the risk response plan",
      "Revise the project scope",
      "Increase the project budget",
    ],
    answer: "Execute the risk response plan",
    explanation:
      "Once a risk event occurs, executing the pre-planned risk response ensures that its impact is managed and mitigated promptly.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 35,
    question:
      "What is the main purpose of developing a procurement management plan?",
    options: [
      "To outline how goods and services will be acquired",
      "To manage project risks",
      "To define the project schedule",
      "To control project quality",
    ],
    answer: "To outline how goods and services will be acquired",
    explanation:
      "A procurement management plan details the processes for acquiring external resources, ensuring that procurement is systematic and aligned with project objectives.",
    categories: ["Procurement Management"],
  },
  {
    id: 36,
    question:
      "When evaluating vendor proposals, which of the following criteria is most important to consider?",
    options: [
      "Vendor reputation and past performance",
      "The color scheme of the proposal document",
      "The vendor's location",
      "The number of employees the vendor has",
    ],
    answer: "Vendor reputation and past performance",
    explanation:
      "A vendors reputation and historical performance are critical indicators of their ability to deliver quality goods or services on time.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 37,
    question:
      "How does a comprehensive communication management plan benefit a project?",
    options: [
      "It reduces the need for stakeholder engagement",
      "It ensures timely and effective information flow among all parties",
      "It primarily focuses on cost reduction",
      "It eliminates the need for meetings",
    ],
    answer:
      "It ensures timely and effective information flow among all parties",
    explanation:
      "A solid communication management plan ensures that all stakeholders receive accurate and timely information, which is crucial for project success.",
    categories: ["Communication Management"],
  },
  {
    id: 38,
    question:
      "In a scenario where key communication channels fail during a critical project phase, what should be your first action?",
    options: [
      "Pause the project indefinitely",
      "Implement a backup communication strategy",
      "Ignore the issue",
      "Reassign project roles",
    ],
    answer: "Implement a backup communication strategy",
    explanation:
      "Having a backup communication plan ensures continuity and prevents critical information from being lost during disruptions.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 39,
    question:
      "Which technique is most effective for identifying all relevant stakeholders at the beginning of a project?",
    options: [
      "Stakeholder Analysis",
      "Budget Forecasting",
      "Risk Assessment",
      "Schedule Compression",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis helps identify, categorize, and understand the influence of various stakeholders, ensuring they are appropriately managed throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 40,
    question:
      "When stakeholders have conflicting priorities, what strategy should a project manager adopt to maintain project progress?",
    options: [
      "Unilaterally decide on the project direction",
      "Facilitate a negotiation session to reach a consensus",
      "Ignore the conflicts and move forward",
      "Immediately reassign stakeholders to different projects",
    ],
    answer: "Facilitate a negotiation session to reach a consensus",
    explanation:
      "Facilitating a discussion among stakeholders helps resolve conflicts and align expectations, ensuring project objectives are met.",
    categories: ["Stakeholder Management"],
  },

  {
    id: 41,
    question:
      "What is a primary advantage of using a detailed Work Breakdown Structure (WBS) in project planning?",
    options: [
      "It provides a clear breakdown of all deliverables and tasks",
      "It reduces overall project cost automatically",
      "It eliminates the need for stakeholder meetings",
      "It shortens the project timeline significantly",
    ],
    answer: "It provides a clear breakdown of all deliverables and tasks",
    explanation:
      "A detailed WBS clarifies all deliverables and tasks, facilitating better planning, tracking, and management of project scope.",
    categories: ["Project Scope Management"],
  },
  {
    id: 42,
    question:
      "In a scenario where the project scope is unclear, which action should a project manager take first?",
    options: [
      "Begin procurement immediately",
      "Conduct a detailed requirements gathering session with stakeholders",
      "Focus solely on cost management",
      "Schedule team-building activities",
    ],
    answer:
      "Conduct a detailed requirements gathering session with stakeholders",
    explanation:
      "Gathering detailed requirements helps clarify the project scope and sets a foundation for planning and control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 43,
    question:
      "Which method is most effective for validating the project scope with stakeholders?",
    options: [
      "Regular scope reviews and acceptance meetings",
      "Implementing cost control measures",
      "Relying solely on the project charter",
      "Skipping scope documentation to save time",
    ],
    answer: "Regular scope reviews and acceptance meetings",
    explanation:
      "Frequent reviews and acceptance meetings ensure that all stakeholders agree on the scope and any changes throughout the project.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 44,
    question:
      "Which cost estimation technique is best suited for early project phases with limited detailed data?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Three-Point Estimating",
      "Reserve Analysis",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating relies on historical data and expert judgment, making it useful in the early phases when detailed information is scarce.",
    categories: ["Cost Management"],
  },
  {
    id: 45,
    question:
      "If a project is running over budget, what immediate step should be taken in cost management?",
    options: [
      "Ignore the budget variance until the end of the project",
      "Analyze the variance and identify corrective measures",
      "Double the project budget",
      "Reduce project quality arbitrarily",
    ],
    answer: "Analyze the variance and identify corrective measures",
    explanation:
      "Understanding why the budget is exceeded helps determine corrective actions to bring the project back in line with the budget.",
    categories: ["Cost Management"],
  },
  {
    id: 46,
    question:
      "Which document is essential for outlining the cost baseline and tracking project expenses?",
    options: [
      "Project Schedule",
      "Cost Management Plan",
      "Scope Statement",
      "Risk Register",
    ],
    answer: "Cost Management Plan",
    explanation:
      "The Cost Management Plan defines how project costs will be planned, managed, and controlled, serving as the baseline for tracking expenses.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 47,
    question:
      "Which scheduling technique involves reducing the project duration by adding additional resources?",
    options: [
      "Crashing",
      "Fast Tracking",
      "Resource Leveling",
      "Critical Path Method",
    ],
    answer: "Crashing",
    explanation:
      "Crashing is a schedule compression technique that involves adding extra resources to critical tasks in order to shorten the overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 48,
    question:
      "A project manager is tasked with developing a detailed project schedule. Which document is most critical for this process?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Activity List",
      "Stakeholder Register",
    ],
    answer: "Activity List",
    explanation:
      "The Activity List details all tasks required for the project, serving as a foundation for developing an accurate schedule.",
    categories: ["Time Management"],
  },
  {
    id: 49,
    question:
      "How does the Critical Path Method (CPM) assist in project scheduling?",
    options: [
      "It identifies the longest sequence of tasks that determines the project duration",
      "It reduces the project budget automatically",
      "It determines the quality requirements for the project",
      "It eliminates the need for risk assessments",
    ],
    answer:
      "It identifies the longest sequence of tasks that determines the project duration",
    explanation:
      "The Critical Path Method identifies tasks that directly impact the project’s finish date, enabling targeted schedule management.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 50,
    question: "What is the focus of quality control in project management?",
    options: [
      "Ensuring processes are followed",
      "Inspecting deliverables for defects",
      "Establishing a project budget",
      "Scheduling project tasks",
    ],
    answer: "Inspecting deliverables for defects",
    explanation:
      "Quality control focuses on monitoring and measuring project deliverables to ensure they meet the defined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 51,
    question:
      "Which process is most effective for improving quality over the duration of the project?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Improvement",
    explanation:
      "Quality Improvement is an ongoing process aimed at continuously enhancing project processes and deliverables throughout the project lifecycle.",
    categories: ["Quality Management"],
  },
  {
    id: 52,
    question:
      "In a situation where quality issues are repeatedly identified, what should be the project manager’s first response?",
    options: [
      "Reevaluate the quality management plan and implement corrective actions",
      "Increase the project scope",
      "Ignore the issues until project closure",
      "Immediately change the project team",
    ],
    answer:
      "Reevaluate the quality management plan and implement corrective actions",
    explanation:
      "Reassessing the quality management plan and taking corrective actions helps resolve recurring issues and improve overall quality.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 53,
    question:
      "Which process in risk management involves assigning priorities to identified risks based on their impact and likelihood?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring and Control",
    ],
    answer: "Risk Analysis",
    explanation:
      "Risk Analysis involves evaluating risks to prioritize them, ensuring that the most significant threats are addressed first.",
    categories: ["Risk Management"],
  },
  {
    id: 54,
    question:
      "When a risk is identified as high impact and high probability, what is the most appropriate course of action?",
    options: [
      "Monitor it without further action",
      "Develop and implement a detailed risk response plan",
      "Assume it will not occur",
      "Transfer the risk without documentation",
    ],
    answer: "Develop and implement a detailed risk response plan",
    explanation:
      "High-impact, high-probability risks require immediate attention with a detailed response plan to mitigate or avoid negative outcomes.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 55,
    question:
      "Which of the following is a key output of the procurement planning process?",
    options: [
      "Procurement Statement of Work (SOW)",
      "Risk Register",
      "Communication Plan",
      "Project Schedule",
    ],
    answer: "Procurement Statement of Work (SOW)",
    explanation:
      "The Procurement SOW details the work required from vendors, serving as a foundational document for managing external procurement.",
    categories: ["Procurement Management"],
  },
  {
    id: 56,
    question:
      "A project team finds a vendor’s proposal to be below expectations. What is the best procurement action?",
    options: [
      "Reject the proposal outright",
      "Request clarification or revision from the vendor",
      "Ignore the proposal and choose another vendor immediately",
      "Adjust the project scope to accommodate the proposal",
    ],
    answer: "Request clarification or revision from the vendor",
    explanation:
      "Requesting further clarification helps determine if the proposal can be improved to meet the project’s requirements, rather than making an immediate rejection.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 57,
    question:
      "What is a key benefit of a well-documented communication plan in a project?",
    options: [
      "It eliminates all risks",
      "It ensures that information is distributed to the right stakeholders at the right time",
      "It reduces project costs significantly",
      "It removes the need for regular meetings",
    ],
    answer:
      "It ensures that information is distributed to the right stakeholders at the right time",
    explanation:
      "A communication plan outlines how and when information is shared, which is critical for keeping stakeholders informed and aligned.",
    categories: ["Communication Management"],
  },
  {
    id: 58,
    question:
      "If communication gaps lead to confusion on project deliverables, what should a project manager do first?",
    options: [
      "Overhaul the entire project plan",
      "Revisit and adjust the communication strategy",
      "Ignore stakeholder feedback",
      "Reduce the frequency of project updates",
    ],
    answer: "Revisit and adjust the communication strategy",
    explanation:
      "Adjusting the communication strategy helps address gaps and ensures clarity, improving overall stakeholder understanding.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 59,
    question:
      "Which process is crucial for identifying stakeholder interests and their influence on a project?",
    options: [
      "Stakeholder Identification",
      "Scope Definition",
      "Cost Estimation",
      "Quality Assurance",
    ],
    answer: "Stakeholder Identification",
    explanation:
      "Identifying stakeholders and understanding their interests is the first step in ensuring effective stakeholder management.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 60,
    question:
      "During a project, how should a project manager handle emerging conflicts between key stakeholders?",
    options: [
      "Delay addressing the conflict until the project ends",
      "Arrange a facilitated meeting to discuss and resolve differences",
      "Ignore the conflict and continue with project tasks",
      "Unilaterally make decisions without consulting stakeholders",
    ],
    answer: "Arrange a facilitated meeting to discuss and resolve differences",
    explanation:
      "A facilitated meeting allows stakeholders to express concerns and work collaboratively toward a resolution, maintaining project momentum.",
    categories: ["Stakeholder Management"],
  },

  // Project Scope Management (3)
  {
    id: 61,
    question:
      "When initiating a project, which document primarily defines the project's boundaries and deliverables?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Stakeholder Register",
      "Risk Register",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly defines what is included in the project, helping to set boundaries and expectations.",
    categories: ["Project Scope Management"],
  },
  {
    id: 62,
    question:
      "In a project where frequent changes are requested, which process is critical to manage these changes effectively?",
    options: [
      "Scope Definition",
      "Change Control",
      "Risk Analysis",
      "Cost Estimation",
    ],
    answer: "Change Control",
    explanation:
      "A formal change control process ensures that all scope changes are reviewed, approved, and documented, preventing scope creep.",
    categories: ["Project Scope Management"],
  },
  {
    id: 63,
    question:
      "What technique is used to visually break down a project’s deliverables into smaller components?",
    options: [
      "Work Breakdown Structure (WBS)",
      "Gantt Chart",
      "Network Diagram",
      "PERT Chart",
    ],
    answer: "Work Breakdown Structure (WBS)",
    explanation:
      "A WBS is a hierarchical decomposition of the project deliverables, making it easier to plan and manage the work.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 64,
    question: "Which process involves setting a baseline for project spending?",
    options: [
      "Cost Estimation",
      "Cost Baseline Development",
      "Cost Control",
      "Budget Forecasting",
    ],
    answer: "Cost Baseline Development",
    explanation:
      "Establishing a cost baseline is essential for measuring and controlling project expenditures throughout the project lifecycle.",
    categories: ["Cost Management"],
  },
  {
    id: 65,
    question:
      "What technique uses a weighted average of estimates to account for uncertainty in cost estimation?",
    options: [
      "Analogous Estimating",
      "Three-Point Estimating",
      "Bottom-Up Estimating",
      "Expert Judgment",
    ],
    answer: "Three-Point Estimating",
    explanation:
      "Three-Point Estimating considers optimistic, pessimistic, and most likely scenarios to calculate an expected cost.",
    categories: ["Cost Management"],
  },
  {
    id: 66,
    question:
      "During project execution, which action is most appropriate when a cost overrun is detected?",
    options: [
      "Immediately request additional funding",
      "Analyze the variance and adjust the cost management plan",
      "Reduce the project scope",
      "Delay all project activities until costs stabilize",
    ],
    answer: "Analyze the variance and adjust the cost management plan",
    explanation:
      "Understanding the reasons behind a cost overrun allows the project team to take corrective action without unnecessary disruptions.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 67,
    question:
      "Which method is used to identify the sequence of tasks and determine the project’s duration?",
    options: [
      "Critical Path Method (CPM)",
      "Resource Leveling",
      "Scope Creep Analysis",
      "Risk Matrix",
    ],
    answer: "Critical Path Method (CPM)",
    explanation:
      "CPM identifies the longest path of scheduled tasks, determining the minimum project duration and critical activities.",
    categories: ["Time Management"],
  },
  {
    id: 68,
    question:
      "What scheduling technique allows tasks normally done in sequence to be performed concurrently?",
    options: [
      "Crashing",
      "Fast Tracking",
      "Scope Reduction",
      "Resource Smoothing",
    ],
    answer: "Fast Tracking",
    explanation:
      "Fast Tracking involves overlapping tasks to reduce the overall project duration, though it may increase risk.",
    categories: ["Time Management"],
  },
  {
    id: 69,
    question:
      "Which document provides the foundation for developing the project schedule?",
    options: [
      "Activity List",
      "Project Charter",
      "Cost Management Plan",
      "Quality Management Plan",
    ],
    answer: "Activity List",
    explanation:
      "The Activity List details all tasks to be performed, serving as a core input for scheduling activities.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 70,
    question:
      "What is the main goal of quality planning in project management?",
    options: [
      "To ensure that the project deliverables meet the required standards",
      "To decrease project duration",
      "To limit project scope",
      "To reduce project costs",
    ],
    answer:
      "To ensure that the project deliverables meet the required standards",
    explanation:
      "Quality planning involves determining quality standards and how to achieve them, ensuring deliverables satisfy stakeholder needs.",
    categories: ["Quality Management"],
  },
  {
    id: 71,
    question:
      "Which quality tool is effective in identifying the causes of a problem or defect?",
    options: [
      "Pareto Chart",
      "Cause-and-Effect Diagram",
      "Flowchart",
      "Scatter Diagram",
    ],
    answer: "Cause-and-Effect Diagram",
    explanation:
      "A Cause-and-Effect Diagram, also known as a fishbone diagram, helps identify potential causes of quality issues.",
    categories: ["Quality Management"],
  },
  {
    id: 72,
    question:
      "When quality issues persist, what immediate action should be taken?",
    options: [
      "Revisit and adjust the quality management plan",
      "Expand the project scope",
      "Increase the project budget drastically",
      "Delay the project indefinitely",
    ],
    answer: "Revisit and adjust the quality management plan",
    explanation:
      "Reviewing and refining the quality management plan helps address recurring issues and improve deliverable quality.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 73,
    question:
      "Which process involves documenting potential risks and their characteristics for further analysis?",
    options: [
      "Risk Identification",
      "Risk Monitoring",
      "Risk Response Planning",
      "Risk Analysis",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the process of listing potential risks and setting the stage for further analysis and planning.",
    categories: ["Risk Management"],
  },
  {
    id: 74,
    question:
      "A project encounters a sudden high-impact risk. Which approach is most appropriate?",
    options: [
      "Wait for the risk to resolve itself",
      "Implement the predefined risk response immediately",
      "Ignore the risk to focus on other tasks",
      "Reassign team members to other projects",
    ],
    answer: "Implement the predefined risk response immediately",
    explanation:
      "Immediate implementation of a risk response minimizes the impact of high-risk events on project outcomes.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 75,
    question:
      "Which process ensures that the project obtains necessary goods and services from external vendors?",
    options: [
      "Procurement Planning",
      "Stakeholder Analysis",
      "Quality Control",
      "Scope Definition",
    ],
    answer: "Procurement Planning",
    explanation:
      "Procurement Planning defines how and when to acquire external resources, aligning vendor management with project needs.",
    categories: ["Procurement Management"],
  },
  {
    id: 76,
    question:
      "In a situation where vendor performance is unsatisfactory, what is the first step in procurement management?",
    options: [
      "Terminate the vendor contract immediately",
      "Initiate a review of the vendor's performance and contractual obligations",
      "Ignore the issue and hope performance improves",
      "Switch to another vendor without review",
    ],
    answer:
      "Initiate a review of the vendor's performance and contractual obligations",
    explanation:
      "Reviewing vendor performance and contractual terms helps determine the appropriate corrective actions while minimizing disruptions.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 77,
    question:
      "What is the most critical aspect of a communication management plan?",
    options: [
      "Identifying the methods and frequency of communication",
      "Increasing the project budget",
      "Expanding the project scope",
      "Delaying the project timeline",
    ],
    answer: "Identifying the methods and frequency of communication",
    explanation:
      "A communication management plan outlines how, when, and to whom project information is distributed, ensuring timely updates.",
    categories: ["Communication Management"],
  },
  {
    id: 78,
    question:
      "If a project team is experiencing miscommunication, what should the project manager do first?",
    options: [
      "Reassess and adjust the communication channels and protocols",
      "Increase the frequency of status meetings without analysis",
      "Assign blame to a team member",
      "Suspend all communications until clarity returns",
    ],
    answer: "Reassess and adjust the communication channels and protocols",
    explanation:
      "Evaluating and modifying communication methods can resolve miscommunication issues and improve overall information flow.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 79,
    question:
      "Which method is most effective for managing and analyzing stakeholder influence and expectations?",
    options: [
      "Stakeholder Mapping",
      "Cost-Benefit Analysis",
      "Risk Assessment",
      "Activity Sequencing",
    ],
    answer: "Stakeholder Mapping",
    explanation:
      "Stakeholder Mapping visually categorizes stakeholders by their influence and interest, facilitating targeted engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 80,
    question:
      "During a project, if a key stakeholder’s expectations change, what is the best immediate action?",
    options: [
      "Update the stakeholder register and communicate changes to the team",
      "Ignore the change to maintain the original plan",
      "Overhaul the entire project scope without analysis",
      "Delay communication until the project is nearly complete",
    ],
    answer:
      "Update the stakeholder register and communicate changes to the team",
    explanation:
      "Keeping the stakeholder register current and informing the team ensures that changes in expectations are managed proactively.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 61,
    question:
      "When initiating a project, which document primarily defines the project's boundaries and deliverables?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Stakeholder Register",
      "Risk Register",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly defines what is included in the project, helping to set boundaries and expectations.",
    categories: ["Project Scope Management"],
  },
  {
    id: 62,
    question:
      "In a project where frequent changes are requested, which process is critical to manage these changes effectively?",
    options: [
      "Scope Definition",
      "Change Control",
      "Risk Analysis",
      "Cost Estimation",
    ],
    answer: "Change Control",
    explanation:
      "A formal change control process ensures that all scope changes are reviewed, approved, and documented, preventing scope creep.",
    categories: ["Project Scope Management"],
  },
  {
    id: 63,
    question:
      "What technique is used to visually break down a project’s deliverables into smaller components?",
    options: [
      "Work Breakdown Structure (WBS)",
      "Gantt Chart",
      "Network Diagram",
      "PERT Chart",
    ],
    answer: "Work Breakdown Structure (WBS)",
    explanation:
      "A WBS is a hierarchical decomposition of the project deliverables, making it easier to plan and manage the work.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 64,
    question: "Which process involves setting a baseline for project spending?",
    options: [
      "Cost Estimation",
      "Cost Baseline Development",
      "Cost Control",
      "Budget Forecasting",
    ],
    answer: "Cost Baseline Development",
    explanation:
      "Establishing a cost baseline is essential for measuring and controlling project expenditures throughout the project lifecycle.",
    categories: ["Cost Management"],
  },
  {
    id: 65,
    question:
      "What technique uses a weighted average of estimates to account for uncertainty in cost estimation?",
    options: [
      "Analogous Estimating",
      "Three-Point Estimating",
      "Bottom-Up Estimating",
      "Expert Judgment",
    ],
    answer: "Three-Point Estimating",
    explanation:
      "Three-Point Estimating considers optimistic, pessimistic, and most likely scenarios to calculate an expected cost.",
    categories: ["Cost Management"],
  },
  {
    id: 66,
    question:
      "During project execution, which action is most appropriate when a cost overrun is detected?",
    options: [
      "Immediately request additional funding",
      "Analyze the variance and adjust the cost management plan",
      "Reduce the project scope",
      "Delay all project activities until costs stabilize",
    ],
    answer: "Analyze the variance and adjust the cost management plan",
    explanation:
      "Understanding the reasons behind a cost overrun allows the project team to take corrective action without unnecessary disruptions.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 67,
    question:
      "Which method is used to identify the sequence of tasks and determine the project’s duration?",
    options: [
      "Critical Path Method (CPM)",
      "Resource Leveling",
      "Scope Creep Analysis",
      "Risk Matrix",
    ],
    answer: "Critical Path Method (CPM)",
    explanation:
      "CPM identifies the longest path of scheduled tasks, determining the minimum project duration and critical activities.",
    categories: ["Time Management"],
  },
  {
    id: 68,
    question:
      "What scheduling technique allows tasks normally done in sequence to be performed concurrently?",
    options: [
      "Crashing",
      "Fast Tracking",
      "Scope Reduction",
      "Resource Smoothing",
    ],
    answer: "Fast Tracking",
    explanation:
      "Fast Tracking involves overlapping tasks to reduce the overall project duration, though it may increase risk.",
    categories: ["Time Management"],
  },
  {
    id: 69,
    question:
      "Which document provides the foundation for developing the project schedule?",
    options: [
      "Activity List",
      "Project Charter",
      "Cost Management Plan",
      "Quality Management Plan",
    ],
    answer: "Activity List",
    explanation:
      "The Activity List details all tasks to be performed, serving as a core input for scheduling activities.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 70,
    question:
      "What is the main goal of quality planning in project management?",
    options: [
      "To ensure that the project deliverables meet the required standards",
      "To decrease project duration",
      "To limit project scope",
      "To reduce project costs",
    ],
    answer:
      "To ensure that the project deliverables meet the required standards",
    explanation:
      "Quality planning involves determining quality standards and how to achieve them, ensuring deliverables satisfy stakeholder needs.",
    categories: ["Quality Management"],
  },
  {
    id: 71,
    question:
      "Which quality tool is effective in identifying the causes of a problem or defect?",
    options: [
      "Pareto Chart",
      "Cause-and-Effect Diagram",
      "Flowchart",
      "Scatter Diagram",
    ],
    answer: "Cause-and-Effect Diagram",
    explanation:
      "A Cause-and-Effect Diagram, also known as a fishbone diagram, helps identify potential causes of quality issues.",
    categories: ["Quality Management"],
  },
  {
    id: 72,
    question:
      "When quality issues persist, what immediate action should be taken?",
    options: [
      "Revisit and adjust the quality management plan",
      "Expand the project scope",
      "Increase the project budget drastically",
      "Delay the project indefinitely",
    ],
    answer: "Revisit and adjust the quality management plan",
    explanation:
      "Reviewing and refining the quality management plan helps address recurring issues and improve deliverable quality.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 73,
    question:
      "Which process involves documenting potential risks and their characteristics for further analysis?",
    options: [
      "Risk Identification",
      "Risk Monitoring",
      "Risk Response Planning",
      "Risk Analysis",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the process of listing potential risks and setting the stage for further analysis and planning.",
    categories: ["Risk Management"],
  },
  {
    id: 74,
    question:
      "A project encounters a sudden high-impact risk. Which approach is most appropriate?",
    options: [
      "Wait for the risk to resolve itself",
      "Implement the predefined risk response immediately",
      "Ignore the risk to focus on other tasks",
      "Reassign team members to other projects",
    ],
    answer: "Implement the predefined risk response immediately",
    explanation:
      "Immediate implementation of a risk response minimizes the impact of high-risk events on project outcomes.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 75,
    question:
      "Which process ensures that the project obtains necessary goods and services from external vendors?",
    options: [
      "Procurement Planning",
      "Stakeholder Analysis",
      "Quality Control",
      "Scope Definition",
    ],
    answer: "Procurement Planning",
    explanation:
      "Procurement Planning defines how and when to acquire external resources, aligning vendor management with project needs.",
    categories: ["Procurement Management"],
  },
  {
    id: 76,
    question:
      "In a situation where vendor performance is unsatisfactory, what is the first step in procurement management?",
    options: [
      "Terminate the vendor contract immediately",
      "Initiate a review of the vendor's performance and contractual obligations",
      "Ignore the issue and hope performance improves",
      "Switch to another vendor without review",
    ],
    answer:
      "Initiate a review of the vendor's performance and contractual obligations",
    explanation:
      "Reviewing vendor performance and contractual terms helps determine the appropriate corrective actions while minimizing disruptions.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 77,
    question:
      "What is the most critical aspect of a communication management plan?",
    options: [
      "Identifying the methods and frequency of communication",
      "Increasing the project budget",
      "Expanding the project scope",
      "Delaying the project timeline",
    ],
    answer: "Identifying the methods and frequency of communication",
    explanation:
      "A communication management plan outlines how, when, and to whom project information is distributed, ensuring timely updates.",
    categories: ["Communication Management"],
  },
  {
    id: 78,
    question:
      "If a project team is experiencing miscommunication, what should the project manager do first?",
    options: [
      "Reassess and adjust the communication channels and protocols",
      "Increase the frequency of status meetings without analysis",
      "Assign blame to a team member",
      "Suspend all communications until clarity returns",
    ],
    answer: "Reassess and adjust the communication channels and protocols",
    explanation:
      "Evaluating and modifying communication methods can resolve miscommunication issues and improve overall information flow.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 79,
    question:
      "Which method is most effective for managing and analyzing stakeholder influence and expectations?",
    options: [
      "Stakeholder Mapping",
      "Cost-Benefit Analysis",
      "Risk Assessment",
      "Activity Sequencing",
    ],
    answer: "Stakeholder Mapping",
    explanation:
      "Stakeholder Mapping visually categorizes stakeholders by their influence and interest, facilitating targeted engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 80,
    question:
      "During a project, if a key stakeholder’s expectations change, what is the best immediate action?",
    options: [
      "Update the stakeholder register and communicate changes to the team",
      "Ignore the change to maintain the original plan",
      "Overhaul the entire project scope without analysis",
      "Delay communication until the project is nearly complete",
    ],
    answer:
      "Update the stakeholder register and communicate changes to the team",
    explanation:
      "Keeping the stakeholder register current and informing the team ensures that changes in expectations are managed proactively.",
    categories: ["Stakeholder Management"],
  },

  // Project Scope Management (3)
  {
    id: 81,
    question:
      "Your project has experienced repeated changes to the scope due to evolving customer needs. In a complex situation where stakeholders disagree on whether to include additional features, how should you proceed?",
    options: [
      "Implement all changes to satisfy every stakeholder",
      "Freeze the scope and reject further changes",
      "Conduct a structured change control meeting to evaluate the impact of each proposed change",
      "Allow changes only if they do not affect the schedule",
    ],
    answer:
      "Conduct a structured change control meeting to evaluate the impact of each proposed change",
    explanation:
      "A structured change control meeting helps assess the benefits and drawbacks of each request and ensures that scope modifications are managed in an orderly, documented manner.",
    categories: ["Project Scope Management"],
  },
  {
    id: 82,
    question:
      "In a scenario where project requirements are ambiguous and team members have different interpretations of deliverables, what is the most effective course of action?",
    options: [
      "Assume the most common interpretation and proceed",
      "Document each interpretation separately and merge them later",
      "Facilitate a requirements clarification workshop with stakeholders and the team",
      "Delay the project until every detail is resolved",
    ],
    answer:
      "Facilitate a requirements clarification workshop with stakeholders and the team",
    explanation:
      "A workshop allows all parties to align on requirements, ensuring a common understanding of the project scope and reducing misinterpretations.",
    categories: ["Project Scope Management"],
  },
  {
    id: 83,
    question:
      "During the execution phase, a key deliverable appears to fall outside the initially defined scope. What should be the project manager’s first step in this complex situation?",
    options: [
      "Immediately integrate the deliverable into the project without changes",
      "Review the original scope documentation and assess whether the deliverable aligns with approved objectives",
      "Reject the deliverable outright",
      "Ask the team to modify the deliverable to fit the scope",
    ],
    answer:
      "Review the original scope documentation and assess whether the deliverable aligns with approved objectives",
    explanation:
      "The manager should first verify the scope documentation to determine if the deliverable is an approved change or a deviation, then proceed accordingly.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 84,
    question:
      "Your project is facing unexpected cost overruns due to market fluctuations. How should you handle this complex situation?",
    options: [
      "Immediately request additional funds from sponsors",
      "Ignore the overruns and focus on other project areas",
      "Perform a detailed cost variance analysis and adjust the cost management plan accordingly",
      "Cut project quality to save costs",
    ],
    answer:
      "Perform a detailed cost variance analysis and adjust the cost management plan accordingly",
    explanation:
      "Analyzing the cost variance helps identify the root causes of overruns and enables the project team to adjust plans and secure necessary approvals for changes.",
    categories: ["Cost Management"],
  },
  {
    id: 85,
    question:
      "In a complex scenario where multiple cost estimation techniques yield differing results, what should the project manager do?",
    options: [
      "Choose the lowest estimate to be safe",
      "Disregard all estimates and wait for actual costs to occur",
      "Use a weighted average of the estimates and consult with experts for validation",
      "Select the highest estimate to avoid budget shortfalls",
    ],
    answer:
      "Use a weighted average of the estimates and consult with experts for validation",
    explanation:
      "A weighted average provides a balanced estimate, and expert consultation ensures the estimation reflects realistic expectations, mitigating the risk of budget issues.",
    categories: ["Cost Management"],
  },
  {
    id: 86,
    question:
      "When a significant budget variance is discovered midway through the project, what is the first step you should take in managing costs?",
    options: [
      "Immediately cut non-essential project activities",
      "Suspend all spending until further notice",
      "Analyze the variance, update forecasts, and communicate potential impacts to stakeholders",
      "Increase the project budget without review",
    ],
    answer:
      "Analyze the variance, update forecasts, and communicate potential impacts to stakeholders",
    explanation:
      "Analyzing the variance and updating forecasts allow for an informed decision-making process, while stakeholder communication ensures transparency.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 87,
    question:
      "A critical project task is delayed due to unforeseen resource shortages, jeopardizing the overall timeline. What is the best approach in this complex scenario?",
    options: [
      "Immediately reassign all resources from other tasks",
      "Cancel the task and remove it from the schedule",
      "Evaluate schedule compression techniques such as crashing or fast tracking while considering resource constraints",
      "Extend the project deadline without analysis",
    ],
    answer:
      "Evaluate schedule compression techniques such as crashing or fast tracking while considering resource constraints",
    explanation:
      "Assessing compression techniques enables the manager to shorten the schedule in a controlled manner while mitigating the impact of resource shortages.",
    categories: ["Time Management"],
  },
  {
    id: 88,
    question:
      "During the project, several tasks start to slip due to dependencies not being met. In this complex situation, how should the project manager respond?",
    options: [
      "Ignore the delays and hope dependencies resolve themselves",
      "Reassess the project schedule to identify critical path impacts and adjust dependent tasks",
      "Shift all tasks to parallel execution regardless of dependencies",
      "Blame the team for poor planning",
    ],
    answer:
      "Reassess the project schedule to identify critical path impacts and adjust dependent tasks",
    explanation:
      "Reassessing the schedule and critical path helps identify the most impactful delays and allows for strategic adjustments to get the project back on track.",
    categories: ["Time Management"],
  },
  {
    id: 89,
    question:
      "In a situation where a major supplier's delay affects multiple project milestones, what is the most effective time management response?",
    options: [
      "Immediately switch suppliers without evaluating alternatives",
      "Negotiate with the supplier for expedited delivery while adjusting the project schedule for potential impacts",
      "Ignore the delays and continue as planned",
      "Cancel affected milestones entirely",
    ],
    answer:
      "Negotiate with the supplier for expedited delivery while adjusting the project schedule for potential impacts",
    explanation:
      "Negotiating with the supplier and adjusting the schedule provides a balanced approach to managing external delays without derailing the entire project.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 90,
    question:
      "A project deliverable repeatedly fails quality testing, causing rework and delays. In this complex scenario, what should be your first action?",
    options: [
      "Immediately accept the deliverable to meet deadlines",
      "Review the quality management plan, identify process gaps, and implement corrective measures",
      "Discard the deliverable and start over from scratch",
      "Reduce the quality standards to match the deliverable",
    ],
    answer:
      "Review the quality management plan, identify process gaps, and implement corrective measures",
    explanation:
      "Reviewing the plan helps identify where processes may be breaking down, allowing for targeted corrective actions that improve quality without sacrificing overall project goals.",
    categories: ["Quality Management"],
  },
  {
    id: 91,
    question:
      "When complex quality issues arise from a new technology integration in your project, what is the most appropriate response?",
    options: [
      "Delay the project indefinitely until the technology is fully understood",
      "Conduct a detailed root cause analysis and update the quality assurance process accordingly",
      "Ignore the technology-related issues to maintain the schedule",
      "Outsource quality testing to an external vendor immediately",
    ],
    answer:
      "Conduct a detailed root cause analysis and update the quality assurance process accordingly",
    explanation:
      "A thorough root cause analysis allows you to understand technology-related challenges and refine your quality processes to address them effectively.",
    categories: ["Quality Management"],
  },
  {
    id: 92,
    question:
      "In a complex situation where customer feedback reveals multiple quality issues across various deliverables, how should a project manager respond?",
    options: [
      "Address each issue as it comes, without changing the overall quality plan",
      "Reevaluate and revise the quality management plan, incorporating systematic feedback and process improvements",
      "Inform the customer that quality is subjective",
      "Stop production until a complete quality overhaul is possible",
    ],
    answer:
      "Reevaluate and revise the quality management plan, incorporating systematic feedback and process improvements",
    explanation:
      "Incorporating systematic feedback helps refine the quality processes to prevent recurring issues while maintaining project momentum.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 93,
    question:
      "A high-impact risk materializes unexpectedly during project execution, affecting multiple workstreams. How should you handle this complex situation?",
    options: [
      "Wait for the risk to subside naturally",
      "Activate the predefined risk response plan immediately and reassess project priorities",
      "Shift focus entirely to other tasks to avoid the risk",
      "Ignore the impact and continue as planned",
    ],
    answer:
      "Activate the predefined risk response plan immediately and reassess project priorities",
    explanation:
      "Immediate activation of the risk response plan helps contain the impact, while reassessing priorities ensures that the project can adapt to new conditions.",
    categories: ["Risk Management"],
  },
  {
    id: 94,
    question:
      "During a critical project phase, new external risks emerge from regulatory changes. In this complex situation, what should be your first step?",
    options: [
      "Ignore the regulatory changes until they are enforced",
      "Conduct an impact analysis and update the risk register and response strategies accordingly",
      "Delay the project indefinitely",
      "Immediately reassign responsibilities without analysis",
    ],
    answer:
      "Conduct an impact analysis and update the risk register and response strategies accordingly",
    explanation:
      "An impact analysis provides insight into how regulatory changes affect the project, allowing for informed updates to risk management strategies.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 95,
    question:
      "A vendor fails to meet contractual performance standards, jeopardizing multiple project deliverables. What complex action should the project manager take?",
    options: [
      "Terminate the contract without review",
      "Conduct a thorough performance review and renegotiate terms or seek alternative suppliers",
      "Ignore the vendor's performance issues",
      "Immediately switch vendors without assessing the root cause",
    ],
    answer:
      "Conduct a thorough performance review and renegotiate terms or seek alternative suppliers",
    explanation:
      "A comprehensive review of vendor performance helps determine whether renegotiation or a supplier change is the best course of action without causing unnecessary disruption.",
    categories: ["Procurement Management"],
  },
  {
    id: 96,
    question:
      "During procurement, conflicting bids create a complex decision-making scenario. What is the most effective approach?",
    options: [
      "Select the bid with the lowest price regardless of quality",
      "Evaluate each bid based on criteria such as vendor reliability, past performance, and overall value",
      "Choose the bid from the vendor with the most appealing proposal design",
      "Delay decision-making until further bids are received",
    ],
    answer:
      "Evaluate each bid based on criteria such as vendor reliability, past performance, and overall value",
    explanation:
      "A thorough evaluation based on multiple criteria ensures that the chosen vendor aligns with project needs and mitigates potential procurement risks.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 97,
    question:
      "Mid-project, a significant communication breakdown occurs between international teams due to cultural and time zone differences. What complex strategy should you implement?",
    options: [
      "Mandate all communications in one language without further support",
      "Establish dedicated communication protocols including scheduled cross-regional meetings and a shared collaboration platform",
      "Ignore the differences and expect teams to adapt on their own",
      "Reassign teams to work exclusively with local members",
    ],
    answer:
      "Establish dedicated communication protocols including scheduled cross-regional meetings and a shared collaboration platform",
    explanation:
      "Dedicated protocols and structured communication channels help bridge cultural and time zone gaps, ensuring consistent and effective communication.",
    categories: ["Communication Management"],
  },
  {
    id: 98,
    question:
      "When project updates are misinterpreted by remote stakeholders leading to conflicting actions, what complex measure should the project manager take?",
    options: [
      "Send out more frequent emails without changing the format",
      "Conduct a virtual town hall meeting to clarify updates and provide an interactive Q&A session",
      "Ignore stakeholder feedback and continue as planned",
      "Reassign stakeholder responsibilities to simplify communication",
    ],
    answer:
      "Conduct a virtual town hall meeting to clarify updates and provide an interactive Q&A session",
    explanation:
      "A virtual town hall meeting allows for real-time clarification and engagement, reducing misinterpretations and aligning stakeholder actions.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 99,
    question:
      "During a critical phase, key stakeholders present conflicting requirements that could derail the project. What complex approach should you take?",
    options: [
      "Implement the requirements of the most vocal stakeholder only",
      "Facilitate a conflict resolution workshop involving all stakeholders to discuss trade-offs and prioritize needs",
      "Ignore the conflicting requirements to avoid delays",
      "Delay project decisions until all stakeholders are in complete agreement",
    ],
    answer:
      "Facilitate a conflict resolution workshop involving all stakeholders to discuss trade-offs and prioritize needs",
    explanation:
      "A workshop fosters open dialogue and collaborative problem-solving, enabling stakeholders to align their priorities and reduce conflicts.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 100,
    question:
      "In a complex scenario where stakeholder influence shifts dramatically mid-project, what is the best initial step to manage the change?",
    options: [
      "Update the stakeholder register and re-assess stakeholder impact on project objectives",
      "Ignore the shift to maintain the original project plan",
      "Immediately reassign the project team without stakeholder input",
      "Suspend all project activities until stakeholder opinions stabilize",
    ],
    answer:
      "Update the stakeholder register and re-assess stakeholder impact on project objectives",
    explanation:
      "Revising the stakeholder register and assessing the new influence dynamics ensures that the project plan is updated to reflect the current stakeholder landscape.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 101,
    question:
      "In a complex project involving cross-departmental deliverables, you find that different teams interpret the scope differently. What is the most effective approach to resolve these discrepancies?",
    options: [
      "Issue separate scope documents for each department",
      "Facilitate a joint scope clarification workshop to align all interpretations",
      "Let each team continue with their current understanding",
      "Immediately freeze the scope without further discussion",
    ],
    answer:
      "Facilitate a joint scope clarification workshop to align all interpretations",
    explanation:
      "A joint workshop ensures that all teams discuss, clarify, and agree on the project scope, minimizing misunderstandings.",
    categories: ["Project Scope Management"],
  },
  {
    id: 102,
    question:
      "When managing a project with evolving requirements, which approach best ensures that scope changes are managed effectively?",
    options: [
      "Allow all changes to be implemented immediately",
      "Implement a formal change control process with stakeholder review",
      "Avoid documenting changes to keep the process flexible",
      "Delegate all change decisions to the project team without oversight",
    ],
    answer: "Implement a formal change control process with stakeholder review",
    explanation:
      "A formal change control process ensures that any changes to the scope are evaluated, approved, and documented, preventing uncontrolled scope creep.",
    categories: ["Project Scope Management"],
  },
  {
    id: 103,
    question:
      "A project deliverable appears to fall outside the originally defined scope. What is the best initial step to address this situation?",
    options: [
      "Immediately integrate the deliverable to avoid rework",
      "Review the approved scope documentation to determine if it qualifies as a change",
      "Discard the deliverable without further consideration",
      "Ask the team to rework the deliverable to match the original scope",
    ],
    answer:
      "Review the approved scope documentation to determine if it qualifies as a change",
    explanation:
      "Verifying against the approved scope documentation helps determine if the deliverable is an acceptable change or an out-of-scope addition.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 104,
    question:
      "When a project's costs begin to deviate significantly from forecasts, what complex step should a project manager take first?",
    options: [
      "Immediately increase the project budget",
      "Perform a detailed variance analysis and reforecast future spending",
      "Cut project quality to reduce costs",
      "Ignore the variance until the next review period",
    ],
    answer:
      "Perform a detailed variance analysis and reforecast future spending",
    explanation:
      "A variance analysis helps identify the reasons behind cost deviations, enabling more accurate reforecasting and corrective action.",
    categories: ["Cost Management"],
  },
  {
    id: 105,
    question:
      "In a situation where market conditions cause fluctuations in material costs, which estimation technique is best to account for uncertainty?",
    options: [
      "Bottom-Up Estimating",
      "Analogous Estimating",
      "Three-Point Estimating",
      "Expert Judgment Alone",
    ],
    answer: "Three-Point Estimating",
    explanation:
      "Three-Point Estimating considers optimistic, pessimistic, and most likely scenarios, providing a balanced estimate under uncertainty.",
    categories: ["Cost Management"],
  },
  {
    id: 106,
    question:
      "Your project experiences a sudden cost overrun. Which of the following actions should you take immediately?",
    options: [
      "Pause the project until costs normalize",
      "Analyze the overrun and update the cost management plan",
      "Approve additional funding without investigation",
      "Decrease the project scope immediately",
    ],
    answer: "Analyze the overrun and update the cost management plan",
    explanation:
      "Understanding the source of the overrun is critical before making any budget adjustments or scope changes.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 107,
    question:
      "A critical activity is delayed, affecting dependent tasks. What is your first step to mitigate the schedule impact?",
    options: [
      "Reassign team members from non-critical tasks",
      "Assess schedule compression techniques such as crashing or fast tracking",
      "Extend the project deadline without analysis",
      "Ignore the delay and proceed with subsequent tasks",
    ],
    answer:
      "Assess schedule compression techniques such as crashing or fast tracking",
    explanation:
      "Evaluating schedule compression methods allows you to determine the most efficient way to regain lost time without compromising quality.",
    categories: ["Time Management"],
  },
  {
    id: 108,
    question:
      "If resource availability suddenly decreases, which scheduling technique helps in adjusting the project timeline?",
    options: [
      "Resource Leveling",
      "Fast Tracking",
      "Crashing",
      "Parallel Scheduling",
    ],
    answer: "Resource Leveling",
    explanation:
      "Resource leveling adjusts the schedule based on resource constraints, ensuring that work is aligned with available resources.",
    categories: ["Time Management"],
  },
  {
    id: 109,
    question:
      "In a complex scenario where multiple project tasks are delayed due to interdependent factors, what should you do?",
    options: [
      "Isolate each delay and resolve them independently",
      "Reassess the entire schedule, update the critical path, and adjust task dependencies",
      "Ignore the delays and hope the situation improves",
      "Immediately shift all tasks to concurrent execution",
    ],
    answer:
      "Reassess the entire schedule, update the critical path, and adjust task dependencies",
    explanation:
      "A comprehensive schedule review helps identify interdependencies and critical path impacts, enabling effective adjustments to the project timeline.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 110,
    question:
      "A project deliverable fails to meet quality standards repeatedly, causing delays and rework. What is the most effective initial response?",
    options: [
      "Accept the deliverable to avoid further delays",
      "Initiate a root cause analysis to identify process weaknesses and implement corrective actions",
      "Immediately outsource the quality control function",
      "Reduce the quality standards to match the deliverable",
    ],
    answer:
      "Initiate a root cause analysis to identify process weaknesses and implement corrective actions",
    explanation:
      "A root cause analysis provides insights into the underlying issues, enabling targeted process improvements without sacrificing quality.",
    categories: ["Quality Management"],
  },
  {
    id: 111,
    question:
      "In a situation where new quality standards are introduced mid-project, what is your best course of action?",
    options: [
      "Ignore the new standards until the project is complete",
      "Reevaluate the quality management plan and integrate the new standards into the project deliverables",
      "Delay the project until new standards become optional",
      "Apply the new standards only to future projects",
    ],
    answer:
      "Reevaluate the quality management plan and integrate the new standards into the project deliverables",
    explanation:
      "Updating the quality management plan ensures that the project meets the current standards and maintains stakeholder confidence.",
    categories: ["Quality Management"],
  },
  {
    id: 112,
    question:
      "During quality reviews, multiple issues are identified across deliverables. What is the best approach to handle these findings in a complex scenario?",
    options: [
      "Address issues on an ad-hoc basis without changing the plan",
      "Conduct a comprehensive quality audit and revise quality processes as needed",
      "Postpone quality reviews until all issues are resolved",
      "Delegate the resolution to the team without oversight",
    ],
    answer:
      "Conduct a comprehensive quality audit and revise quality processes as needed",
    explanation:
      "A comprehensive audit helps identify systemic issues and informs necessary process adjustments to improve overall quality.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 113,
    question:
      "When confronted with multiple emerging risks simultaneously, what is the best strategy for prioritization?",
    options: [
      "Address the risks in the order they were identified",
      "Prioritize risks based on their potential impact and likelihood, using a risk matrix",
      "Focus only on risks that have already materialized",
      "Assign equal attention to all risks regardless of impact",
    ],
    answer:
      "Prioritize risks based on their potential impact and likelihood, using a risk matrix",
    explanation:
      "A risk matrix helps evaluate and rank risks, ensuring that high-impact and high-probability risks receive priority attention.",
    categories: ["Risk Management"],
  },
  {
    id: 114,
    question:
      "If a risk that was previously low priority suddenly becomes high priority, what should your first action be?",
    options: [
      "Immediately update the risk register and adjust the response strategy",
      "Ignore the change and continue with the original plan",
      "Wait for further confirmation before taking action",
      "Reassign the risk to another project manager",
    ],
    answer:
      "Immediately update the risk register and adjust the response strategy",
    explanation:
      "Quickly updating the risk register ensures that the new risk priority is acknowledged and that appropriate mitigation actions are implemented promptly.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 115,
    question:
      "In a scenario where conflicting vendor proposals are received, how should you approach vendor selection?",
    options: [
      "Select the vendor with the lowest bid without further evaluation",
      "Use a weighted scoring model to evaluate proposals based on multiple criteria",
      "Choose the vendor with the most detailed proposal only",
      "Defer the decision until more proposals are received",
    ],
    answer:
      "Use a weighted scoring model to evaluate proposals based on multiple criteria",
    explanation:
      "A weighted scoring model ensures that vendors are evaluated holistically, balancing cost, quality, reliability, and other critical factors.",
    categories: ["Procurement Management"],
  },
  {
    id: 116,
    question:
      "If a vendor consistently fails to meet performance expectations, what should be your first step?",
    options: [
      "Terminate the vendor immediately without review",
      "Conduct a performance review and engage in discussions to resolve issues",
      "Ignore the performance issues and hope they improve",
      "Switch to a new vendor without further analysis",
    ],
    answer:
      "Conduct a performance review and engage in discussions to resolve issues",
    explanation:
      "A performance review provides insights into the issues, allowing for corrective actions or renegotiation before deciding on termination or replacement.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 117,
    question:
      "When critical project information is misinterpreted by the team, what is the most effective initial measure to correct the misunderstanding?",
    options: [
      "Resend the information without changes",
      "Arrange a team meeting to clarify the message and allow for Q&A",
      "Distribute a revised document without discussion",
      "Assume the team will self-correct over time",
    ],
    answer: "Arrange a team meeting to clarify the message and allow for Q&A",
    explanation:
      "A meeting fosters interactive discussion and immediate clarification, ensuring that misunderstandings are resolved promptly.",
    categories: ["Communication Management"],
  },
  {
    id: 118,
    question:
      "If communication breakdowns occur frequently during a project, what is the best corrective action?",
    options: [
      "Increase the number of emails sent to the team",
      "Review and overhaul the communication strategy, including tools and frequency",
      "Reduce the number of project meetings",
      "Delegate communication solely to a single team member",
    ],
    answer:
      "Review and overhaul the communication strategy, including tools and frequency",
    explanation:
      "A thorough review of the communication strategy helps identify gaps and implement improvements to enhance overall information flow.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 119,
    question:
      "In a scenario where new stakeholders join mid-project with conflicting priorities, what is your first step?",
    options: [
      "Ignore the new stakeholders until the next review",
      "Integrate the new stakeholders immediately without analysis",
      "Conduct a stakeholder analysis and update the stakeholder engagement plan accordingly",
      "Hold separate meetings with existing and new stakeholders",
    ],
    answer:
      "Conduct a stakeholder analysis and update the stakeholder engagement plan accordingly",
    explanation:
      "A fresh stakeholder analysis ensures that all influences are understood and that the engagement plan is updated to reflect the new dynamics.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 120,
    question:
      "When long-standing stakeholder relationships become strained due to conflicting expectations, what is the best approach to restore alignment?",
    options: [
      "Communicate unilaterally to enforce project decisions",
      "Facilitate a mediated session where stakeholders can openly discuss concerns and realign expectations",
      "Exclude dissenting stakeholders from future discussions",
      "Delay project decisions until relationships improve naturally",
    ],
    answer:
      "Facilitate a mediated session where stakeholders can openly discuss concerns and realign expectations",
    explanation:
      "A mediated session promotes open dialogue, helping stakeholders address conflicts and rebuild a cooperative working environment.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 121,
    type: "multiple-choice",
    question:
      "Which document best outlines the deliverables and boundaries of a project?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Risk Register",
      "Communication Plan",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly details the project's deliverables and defines what is included or excluded from the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 122,
    type: "fill-in-the-blank",
    question:
      "The process of breaking down project deliverables into smaller, manageable components is known as ________.",
    answer: "Work Breakdown Structure",
    explanation:
      "The Work Breakdown Structure (WBS) decomposes project deliverables into smaller work packages for easier management.",
    categories: ["Project Scope Management"],
  },
  {
    id: 123,
    type: "multiple-response",
    question:
      "Select all that apply: Which of the following are benefits of effective scope management?",
    options: [
      "Clear deliverable definition",
      "Improved stakeholder communication",
      "Increased project cost",
      "Reduced scope creep",
    ],
    answers: [
      "Clear deliverable definition",
      "Improved stakeholder communication",
      "Reduced scope creep",
    ],
    explanation:
      "Effective scope management provides clarity in deliverables, fosters better communication among stakeholders, and minimizes uncontrolled changes.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 124,
    type: "multiple-choice",
    question:
      "Which estimating technique uses historical data from similar projects to forecast costs?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Expert Judgment",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating leverages historical data from past projects to quickly forecast current project costs.",
    categories: ["Cost Management"],
  },
  {
    id: 125,
    type: "matching",
    question:
      "Match the following cost management processes with their main objectives.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast project spending" },
      { left: "Cost Budgeting", right: "Establish a baseline" },
      { left: "Cost Control", right: "Monitor and regulate expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast project spending",
      "Establish a baseline",
      "Monitor and regulate expenditures",
    ],
    explanation:
      "Each process in cost management is associated with a distinct objective that guides financial control throughout the project.",
    categories: ["Cost Management"],
  },
  {
    id: 126,
    type: "multiple-choice",
    question:
      "When actual project spending exceeds planned spending, which process should be initiated?",
    options: [
      "Cost Estimation",
      "Cost Control",
      "Cost Forecasting",
      "Cost Reporting",
    ],
    answer: "Cost Control",
    explanation:
      "Cost control is used to monitor expenditures and implement corrective actions when spending deviates from the baseline.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 127,
    type: "multiple-choice",
    question:
      "Which method is used to determine the longest sequence of tasks that defines the project duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "Resource Leveling",
      "PERT Analysis",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method identifies the longest stretch of dependent tasks and is essential for determining the minimum project duration.",
    categories: ["Time Management"],
  },
  {
    id: 128,
    type: "hotspot",
    question: "Identify the critical path on the provided network diagram.",
    imageUrl: "https://example.com/critical-path.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "1",
        label: "Path 1",
        coordinates: { x: 20, y: 50, width: 100, height: 40 },
      },
      {
        id: "2",
        label: "Path 2",
        coordinates: { x: 150, y: 50, width: 100, height: 40 },
      },
    ],
    answer: "2",
    explanation:
      "Path 2 is identified as the critical path because it has the longest duration among the available sequences.",
    categories: ["Time Management"],
  },
  {
    id: 129,
    type: "multiple-choice",
    question:
      "Which scheduling technique involves overlapping tasks to reduce the overall project duration?",
    options: [
      "Crashing",
      "Fast Tracking",
      "Resource Smoothing",
      "Delay Analysis",
    ],
    answer: "Fast Tracking",
    explanation:
      "Fast tracking involves performing tasks concurrently that were originally planned in sequence, thereby compressing the schedule.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 130,
    type: "multiple-choice",
    question:
      "Which process is primarily focused on verifying that project deliverables meet quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality control is the process of monitoring and testing deliverables to ensure they adhere to predefined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 131,
    type: "fill-in-the-blank",
    question:
      "The ongoing process of enhancing project processes and deliverables is known as ________.",
    answer: "Quality Improvement",
    explanation:
      "Quality improvement is aimed at continuously upgrading project processes to better meet stakeholder expectations.",
    categories: ["Quality Management"],
  },
  {
    id: 132,
    type: "multiple-choice",
    question:
      "Which tool is most effective for identifying the root causes of quality issues?",
    options: [
      "Flowchart",
      "Pareto Chart",
      "Fishbone Diagram",
      "Scatter Diagram",
    ],
    answer: "Fishbone Diagram",
    explanation:
      "A Fishbone Diagram helps in visualizing potential causes of quality problems to facilitate root cause analysis.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 133,
    type: "multiple-choice",
    question:
      "Which risk management process involves ranking risks based on impact and probability?",
    options: [
      "Risk Identification",
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Response Planning",
    ],
    answer: "Qualitative Risk Analysis",
    explanation:
      "Qualitative risk analysis involves prioritizing risks based on their likelihood and impact, guiding further actions.",
    categories: ["Risk Management"],
  },
  {
    id: 134,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities are typically part of risk response planning?",
    options: [
      "Risk Avoidance",
      "Risk Transfer",
      "Risk Acceptance",
      "Scope Creep",
    ],
    answers: ["Risk Avoidance", "Risk Transfer", "Risk Acceptance"],
    explanation:
      "Risk response planning includes strategies such as avoidance, transfer, and acceptance to manage identified risks.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 135,
    type: "multiple-choice",
    question:
      "Which document specifies the requirements and conditions for acquiring external goods and services?",
    options: [
      "Procurement Statement of Work",
      "Project Charter",
      "Scope Statement",
      "Communication Plan",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work defines the goods or services to be acquired and is crucial for procurement planning.",
    categories: ["Procurement Management"],
  },
  {
    id: 136,
    type: "matching",
    question: "Match the procurement processes with their intended outcomes.",
    pairs: [
      { left: "Procurement Planning", right: "Determine what to procure" },
      { left: "Solicitation", right: "Obtain vendor proposals" },
      { left: "Contract Administration", right: "Manage vendor performance" },
    ],
    leftOptions: [
      "Procurement Planning",
      "Solicitation",
      "Contract Administration",
    ],
    rightOptions: [
      "Determine what to procure",
      "Obtain vendor proposals",
      "Manage vendor performance",
    ],
    explanation:
      "These matches highlight how each procurement process contributes to effective vendor management.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 137,
    type: "multiple-choice",
    question:
      "Which process ensures that project information is distributed effectively among stakeholders?",
    options: [
      "Communication Planning",
      "Information Distribution",
      "Performance Reporting",
      "Stakeholder Engagement",
    ],
    answer: "Information Distribution",
    explanation:
      "Information distribution is key to ensuring timely and accurate dissemination of project updates to stakeholders.",
    categories: ["Communication Management"],
  },
  {
    id: 138,
    type: "hotspot",
    question:
      "On the provided communication flow diagram, select the area representing the main communication hub.",
    imageUrl: "https://example.com/comm-hub.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "hub",
        label: "Communication Hub",
        coordinates: { x: 100, y: 80, width: 80, height: 50 },
      },
      {
        id: "node",
        label: "Peripheral Node",
        coordinates: { x: 200, y: 80, width: 80, height: 50 },
      },
    ],
    answer: "hub",
    explanation:
      "The communication hub is the central point where project information is aggregated before being distributed.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 139,
    type: "multiple-choice",
    question:
      "Which process involves identifying individuals or groups that may impact or be impacted by the project?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Engagement",
      "Stakeholder Analysis",
      "Stakeholder Management Planning",
    ],
    answer: "Stakeholder Identification",
    explanation:
      "Stakeholder identification is the initial step in understanding who might influence or be influenced by the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 140,
    type: "multiple-response",
    question:
      "Select all that apply: Which strategies can enhance stakeholder engagement throughout a project?",
    options: [
      "Regular communication updates",
      "Involving stakeholders in decision-making",
      "Limiting stakeholder participation",
      "Conducting structured feedback sessions",
    ],
    answers: [
      "Regular communication updates",
      "Involving stakeholders in decision-making",
      "Conducting structured feedback sessions",
    ],
    explanation:
      "Effective stakeholder engagement relies on frequent communication, active involvement in decisions, and regular feedback.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 141,
    type: "multiple-choice",
    question:
      "When a stakeholder proposes an addition to the project deliverables after approval, what should be the project manager’s first action?",
    options: [
      "Immediately incorporate the change to satisfy the stakeholder",
      "Refer to the change control process and assess the impact",
      "Reject the change outright to preserve the original scope",
      "Ignore the request and continue as planned",
    ],
    answer: "Refer to the change control process and assess the impact",
    explanation:
      "Using the change control process ensures that any proposed scope changes are properly evaluated, documented, and approved before implementation.",
    categories: ["Project Scope Management"],
  },
  {
    id: 142,
    type: "fill-in-the-blank",
    question:
      "The formal document that captures all approved changes to the project scope is known as the ________.",
    answer: "Scope Change Log",
    explanation:
      "A Scope Change Log is used to record and track changes to the project scope, ensuring transparency and control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 143,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions help prevent scope creep during a project?",
    options: [
      "Implementing a formal change control process",
      "Maintaining detailed documentation of deliverables",
      "Allowing verbal agreements for changes",
      "Conducting regular scope reviews with stakeholders",
    ],
    answers: [
      "Implementing a formal change control process",
      "Maintaining detailed documentation of deliverables",
      "Conducting regular scope reviews with stakeholders",
    ],
    explanation:
      "Preventing scope creep requires formal processes, clear documentation, and regular communication with stakeholders.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 144,
    type: "multiple-choice",
    question:
      "Which tool helps track project performance against the cost baseline by integrating cost, schedule, and scope data?",
    options: [
      "Earned Value Management (EVM)",
      "Risk Register",
      "Gantt Chart",
      "Quality Control Chart",
    ],
    answer: "Earned Value Management (EVM)",
    explanation:
      "EVM provides a comprehensive view of project performance by comparing planned versus actual cost and schedule performance.",
    categories: ["Cost Management"],
  },
  {
    id: 145,
    type: "matching",
    question:
      "Match the following cost management processes with their primary functions.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast project expenses" },
      { left: "Cost Budgeting", right: "Establish spending limits" },
      { left: "Cost Control", right: "Monitor and adjust expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast project expenses",
      "Establish spending limits",
      "Monitor and adjust expenditures",
    ],
    explanation:
      "Each cost management process plays a specific role: estimating, budgeting, and controlling project costs.",
    categories: ["Cost Management"],
  },
  {
    id: 146,
    type: "multiple-response",
    question:
      "Select all that apply: Which methods can be used to manage cost variances during project execution?",
    options: [
      "Variance analysis",
      "Reforecasting the budget",
      "Ignoring minor deviations",
      "Implementing corrective actions",
    ],
    answers: [
      "Variance analysis",
      "Reforecasting the budget",
      "Implementing corrective actions",
    ],
    explanation:
      "Effective cost management includes analyzing variances, updating forecasts, and applying corrective measures as needed.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 147,
    type: "multiple-choice",
    question:
      "Which scheduling tool is used to display the start and finish dates of project activities along a timeline?",
    options: [
      "Network Diagram",
      "Gantt Chart",
      "Pareto Chart",
      "Work Breakdown Structure",
    ],
    answer: "Gantt Chart",
    explanation:
      "A Gantt Chart visually represents the project schedule by showing activity durations along a timeline.",
    categories: ["Time Management"],
  },
  {
    id: 148,
    type: "hotspot",
    question:
      "On the provided network diagram, click the area that represents the project's critical path.",
    imageUrl: "https://example.com/network-diagram-2.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "A",
        label: "Path A",
        coordinates: { x: 30, y: 60, width: 90, height: 40 },
      },
      {
        id: "B",
        label: "Path B",
        coordinates: { x: 150, y: 60, width: 90, height: 40 },
      },
    ],
    answer: "B",
    explanation:
      "Path B is the critical path as it determines the minimum project duration by having the longest sequence of dependent tasks.",
    categories: ["Time Management"],
  },
  {
    id: 149,
    type: "fill-in-the-blank",
    question:
      "The technique of reallocating resources to address schedule constraints is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling is used to adjust the project schedule based on resource availability, ensuring that over-allocation does not occur.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 150,
    type: "multiple-choice",
    question:
      "Which quality management process focuses on ensuring that project processes are executed properly?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance involves auditing and evaluating project processes to ensure standards and procedures are correctly followed.",
    categories: ["Quality Management"],
  },
  {
    id: 151,
    type: "matching",
    question: "Match the quality tools with their primary purposes.",
    pairs: [
      { left: "Pareto Chart", right: "Identify major causes" },
      { left: "Control Chart", right: "Monitor process stability" },
      { left: "Histogram", right: "Visualize frequency distribution" },
    ],
    leftOptions: ["Pareto Chart", "Control Chart", "Histogram"],
    rightOptions: [
      "Identify major causes",
      "Monitor process stability",
      "Visualize frequency distribution",
    ],
    explanation:
      "These quality tools help in identifying, monitoring, and analyzing different aspects of project quality.",
    categories: ["Quality Management"],
  },
  {
    id: 152,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions contribute to continuous quality improvement in a project?",
    options: [
      "Conducting regular quality audits",
      "Integrating stakeholder feedback",
      "Ignoring minor defects to save time",
      "Implementing corrective and preventive actions",
    ],
    answers: [
      "Conducting regular quality audits",
      "Integrating stakeholder feedback",
      "Implementing corrective and preventive actions",
    ],
    explanation:
      "Continuous quality improvement relies on audits, stakeholder input, and systematic corrective measures to enhance project outcomes.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 153,
    type: "multiple-choice",
    question:
      "Which technique is best used for quantifying the overall impact of identified risks on project objectives?",
    options: [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Register Update",
      "Risk Mitigation Planning",
    ],
    answer: "Quantitative Risk Analysis",
    explanation:
      "Quantitative Risk Analysis uses numerical methods to determine the overall effect of risks on project objectives.",
    categories: ["Risk Management"],
  },
  {
    id: 154,
    type: "fill-in-the-blank",
    question:
      "The document used to record and track identified risks, their impact, and response strategies is known as the ________.",
    answer: "Risk Register",
    explanation:
      "The Risk Register is a living document that details risks, assessments, and mitigation strategies throughout the project.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 155,
    type: "multiple-choice",
    question:
      "Which process in procurement management involves obtaining bids or proposals from potential vendors?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Contract Administration",
      "Vendor Evaluation",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of requesting proposals or bids from vendors as part of the procurement cycle.",
    categories: ["Procurement Management"],
  },
  {
    id: 156,
    type: "hotspot",
    question:
      "In the diagram of a vendor selection process, click on the phase where proposals are compared.",
    imageUrl: "https://example.com/vendor-selection.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "compare",
        label: "Comparison Phase",
        coordinates: { x: 120, y: 70, width: 100, height: 50 },
      },
      {
        id: "award",
        label: "Award Phase",
        coordinates: { x: 250, y: 70, width: 100, height: 50 },
      },
    ],
    answer: "compare",
    explanation:
      "The comparison phase is where vendor proposals are evaluated against the set criteria before making a selection.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 157,
    type: "multiple-choice",
    question:
      "Which aspect is most critical in developing an effective communication management plan?",
    options: [
      "Defining communication channels and frequency",
      "Maximizing the number of emails sent",
      "Minimizing stakeholder interactions",
      "Outsourcing all communications",
    ],
    answer: "Defining communication channels and frequency",
    explanation:
      "An effective communication plan clearly specifies how, when, and through which channels information will be disseminated.",
    categories: ["Communication Management"],
  },
  {
    id: 158,
    type: "multiple-response",
    question:
      "Select all that apply: Which strategies help enhance project communication?",
    options: [
      "Establishing regular status meetings",
      "Using a centralized collaboration platform",
      "Limiting information to only top management",
      "Providing clear and concise documentation",
    ],
    answers: [
      "Establishing regular status meetings",
      "Using a centralized collaboration platform",
      "Providing clear and concise documentation",
    ],
    explanation:
      "Enhanced communication is achieved through regular meetings, centralized tools, and clear documentation that reaches all relevant stakeholders.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 159,
    type: "multiple-choice",
    question:
      "Which process is critical for determining the level of influence and interest of project stakeholders?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates each stakeholder’s influence and interest, which is crucial for developing an effective engagement strategy.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 160,
    type: "matching",
    question:
      "Match each stakeholder management activity with its intended purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "List all potential stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop strategies for involvement",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "List all potential stakeholders",
      "Develop strategies for involvement",
    ],
    explanation:
      "These activities ensure that stakeholders are both identified early and effectively engaged throughout the project lifecycle.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 141,
    type: "multiple-choice",
    question:
      "When a stakeholder proposes an addition to the project deliverables after approval, what should be the project manager’s first action?",
    options: [
      "Immediately incorporate the change to satisfy the stakeholder",
      "Refer to the change control process and assess the impact",
      "Reject the change outright to preserve the original scope",
      "Ignore the request and continue as planned",
    ],
    answer: "Refer to the change control process and assess the impact",
    explanation:
      "Using the change control process ensures that any proposed scope changes are properly evaluated, documented, and approved before implementation.",
    categories: ["Project Scope Management"],
  },
  {
    id: 142,
    type: "fill-in-the-blank",
    question:
      "The formal document that captures all approved changes to the project scope is known as the ________.",
    answer: "Scope Change Log",
    explanation:
      "A Scope Change Log is used to record and track changes to the project scope, ensuring transparency and control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 143,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions help prevent scope creep during a project?",
    options: [
      "Implementing a formal change control process",
      "Maintaining detailed documentation of deliverables",
      "Allowing verbal agreements for changes",
      "Conducting regular scope reviews with stakeholders",
    ],
    answers: [
      "Implementing a formal change control process",
      "Maintaining detailed documentation of deliverables",
      "Conducting regular scope reviews with stakeholders",
    ],
    explanation:
      "Preventing scope creep requires formal processes, clear documentation, and regular communication with stakeholders.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 144,
    type: "multiple-choice",
    question:
      "Which tool helps track project performance against the cost baseline by integrating cost, schedule, and scope data?",
    options: [
      "Earned Value Management (EVM)",
      "Risk Register",
      "Gantt Chart",
      "Quality Control Chart",
    ],
    answer: "Earned Value Management (EVM)",
    explanation:
      "EVM provides a comprehensive view of project performance by comparing planned versus actual cost and schedule performance.",
    categories: ["Cost Management"],
  },
  {
    id: 145,
    type: "matching",
    question:
      "Match the following cost management processes with their primary functions.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast project expenses" },
      { left: "Cost Budgeting", right: "Establish spending limits" },
      { left: "Cost Control", right: "Monitor and adjust expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast project expenses",
      "Establish spending limits",
      "Monitor and adjust expenditures",
    ],
    explanation:
      "Each cost management process plays a specific role: estimating, budgeting, and controlling project costs.",
    categories: ["Cost Management"],
  },
  {
    id: 146,
    type: "multiple-response",
    question:
      "Select all that apply: Which methods can be used to manage cost variances during project execution?",
    options: [
      "Variance analysis",
      "Reforecasting the budget",
      "Ignoring minor deviations",
      "Implementing corrective actions",
    ],
    answers: [
      "Variance analysis",
      "Reforecasting the budget",
      "Implementing corrective actions",
    ],
    explanation:
      "Effective cost management includes analyzing variances, updating forecasts, and applying corrective measures as needed.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 147,
    type: "multiple-choice",
    question:
      "Which scheduling tool is used to display the start and finish dates of project activities along a timeline?",
    options: [
      "Network Diagram",
      "Gantt Chart",
      "Pareto Chart",
      "Work Breakdown Structure",
    ],
    answer: "Gantt Chart",
    explanation:
      "A Gantt Chart visually represents the project schedule by showing activity durations along a timeline.",
    categories: ["Time Management"],
  },
  {
    id: 148,
    type: "hotspot",
    question:
      "On the provided network diagram, click the area that represents the project's critical path.",
    imageUrl: "https://example.com/network-diagram-2.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "A",
        label: "Path A",
        coordinates: { x: 30, y: 60, width: 90, height: 40 },
      },
      {
        id: "B",
        label: "Path B",
        coordinates: { x: 150, y: 60, width: 90, height: 40 },
      },
    ],
    answer: "B",
    explanation:
      "Path B is the critical path as it determines the minimum project duration by having the longest sequence of dependent tasks.",
    categories: ["Time Management"],
  },
  {
    id: 149,
    type: "fill-in-the-blank",
    question:
      "The technique of reallocating resources to address schedule constraints is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling is used to adjust the project schedule based on resource availability, ensuring that over-allocation does not occur.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 150,
    type: "multiple-choice",
    question:
      "Which quality management process focuses on ensuring that project processes are executed properly?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance involves auditing and evaluating project processes to ensure standards and procedures are correctly followed.",
    categories: ["Quality Management"],
  },
  {
    id: 151,
    type: "matching",
    question: "Match the quality tools with their primary purposes.",
    pairs: [
      { left: "Pareto Chart", right: "Identify major causes" },
      { left: "Control Chart", right: "Monitor process stability" },
      { left: "Histogram", right: "Visualize frequency distribution" },
    ],
    leftOptions: ["Pareto Chart", "Control Chart", "Histogram"],
    rightOptions: [
      "Identify major causes",
      "Monitor process stability",
      "Visualize frequency distribution",
    ],
    explanation:
      "These quality tools help in identifying, monitoring, and analyzing different aspects of project quality.",
    categories: ["Quality Management"],
  },
  {
    id: 152,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions contribute to continuous quality improvement in a project?",
    options: [
      "Conducting regular quality audits",
      "Integrating stakeholder feedback",
      "Ignoring minor defects to save time",
      "Implementing corrective and preventive actions",
    ],
    answers: [
      "Conducting regular quality audits",
      "Integrating stakeholder feedback",
      "Implementing corrective and preventive actions",
    ],
    explanation:
      "Continuous quality improvement relies on audits, stakeholder input, and systematic corrective measures to enhance project outcomes.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 153,
    type: "multiple-choice",
    question:
      "Which technique is best used for quantifying the overall impact of identified risks on project objectives?",
    options: [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Register Update",
      "Risk Mitigation Planning",
    ],
    answer: "Quantitative Risk Analysis",
    explanation:
      "Quantitative Risk Analysis uses numerical methods to determine the overall effect of risks on project objectives.",
    categories: ["Risk Management"],
  },
  {
    id: 154,
    type: "fill-in-the-blank",
    question:
      "The document used to record and track identified risks, their impact, and response strategies is known as the ________.",
    answer: "Risk Register",
    explanation:
      "The Risk Register is a living document that details risks, assessments, and mitigation strategies throughout the project.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 155,
    type: "multiple-choice",
    question:
      "Which process in procurement management involves obtaining bids or proposals from potential vendors?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Contract Administration",
      "Vendor Evaluation",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of requesting proposals or bids from vendors as part of the procurement cycle.",
    categories: ["Procurement Management"],
  },
  {
    id: 156,
    type: "hotspot",
    question:
      "In the diagram of a vendor selection process, click on the phase where proposals are compared.",
    imageUrl: "https://example.com/vendor-selection.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "compare",
        label: "Comparison Phase",
        coordinates: { x: 120, y: 70, width: 100, height: 50 },
      },
      {
        id: "award",
        label: "Award Phase",
        coordinates: { x: 250, y: 70, width: 100, height: 50 },
      },
    ],
    answer: "compare",
    explanation:
      "The comparison phase is where vendor proposals are evaluated against the set criteria before making a selection.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 157,
    type: "multiple-choice",
    question:
      "Which aspect is most critical in developing an effective communication management plan?",
    options: [
      "Defining communication channels and frequency",
      "Maximizing the number of emails sent",
      "Minimizing stakeholder interactions",
      "Outsourcing all communications",
    ],
    answer: "Defining communication channels and frequency",
    explanation:
      "An effective communication plan clearly specifies how, when, and through which channels information will be disseminated.",
    categories: ["Communication Management"],
  },
  {
    id: 158,
    type: "multiple-response",
    question:
      "Select all that apply: Which strategies help enhance project communication?",
    options: [
      "Establishing regular status meetings",
      "Using a centralized collaboration platform",
      "Limiting information to only top management",
      "Providing clear and concise documentation",
    ],
    answers: [
      "Establishing regular status meetings",
      "Using a centralized collaboration platform",
      "Providing clear and concise documentation",
    ],
    explanation:
      "Enhanced communication is achieved through regular meetings, centralized tools, and clear documentation that reaches all relevant stakeholders.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 159,
    type: "multiple-choice",
    question:
      "Which process is critical for determining the level of influence and interest of project stakeholders?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates each stakeholder’s influence and interest, which is crucial for developing an effective engagement strategy.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 160,
    type: "matching",
    question:
      "Match each stakeholder management activity with its intended purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "List all potential stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop strategies for involvement",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "List all potential stakeholders",
      "Develop strategies for involvement",
    ],
    explanation:
      "These activities ensure that stakeholders are both identified early and effectively engaged throughout the project lifecycle.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 161,
    type: "multiple-choice",
    question:
      "How can a project manager ensure that all approved scope changes align with the project's overall objectives?",
    options: [
      "By updating the project charter immediately",
      "By reviewing each change through the change control board",
      "By communicating changes directly to the team without documentation",
      "By ignoring minor changes to avoid delays",
    ],
    answer: "By reviewing each change through the change control board",
    explanation:
      "Using a change control board ensures that every proposed change is evaluated for alignment with project objectives before approval.",
    categories: ["Project Scope Management"],
  },
  {
    id: 162,
    type: "fill-in-the-blank",
    question:
      "The document that details the approved changes and modifications to the project scope is called the ________.",
    answer: "Scope Baseline",
    explanation:
      "The Scope Baseline includes the approved project scope, including any changes that have been formally accepted.",
    categories: ["Project Scope Management"],
  },
  {
    id: 163,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices help maintain clarity in project scope?",
    options: [
      "Regular stakeholder meetings",
      "Comprehensive documentation of requirements",
      "Frequent informal discussions without records",
      "Utilizing a detailed Work Breakdown Structure",
    ],
    answers: [
      "Regular stakeholder meetings",
      "Comprehensive documentation of requirements",
      "Utilizing a detailed Work Breakdown Structure",
    ],
    explanation:
      "Maintaining clarity in project scope relies on formal communications, thorough documentation, and a well-structured breakdown of work.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 164,
    type: "multiple-choice",
    question:
      "When a project experiences unexpected cost increases, what is the first step a project manager should take?",
    options: [
      "Immediately request additional funds",
      "Review the cost baseline and perform a variance analysis",
      "Cut project scope without analysis",
      "Delay the project until the budget is revalidated",
    ],
    answer: "Review the cost baseline and perform a variance analysis",
    explanation:
      "A variance analysis helps identify the root causes of cost increases, enabling informed decisions about budget adjustments.",
    categories: ["Cost Management"],
  },
  {
    id: 165,
    type: "matching",
    question:
      "Match the cost management processes with their primary outcomes.",
    pairs: [
      { left: "Cost Estimation", right: "Predict project costs" },
      { left: "Cost Budgeting", right: "Establish a spending plan" },
      { left: "Cost Control", right: "Monitor and adjust expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Predict project costs",
      "Establish a spending plan",
      "Monitor and adjust expenditures",
    ],
    explanation:
      "These matches reinforce the roles of each cost management process in ensuring financial control over the project.",
    categories: ["Cost Management"],
  },
  {
    id: 166,
    type: "fill-in-the-blank",
    question:
      "The metric used to compare the value of work performed to the actual cost incurred is known as ________.",
    answer: "Earned Value",
    explanation:
      "Earned Value is a key metric in Earned Value Management (EVM), used to assess cost performance.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 167,
    type: "multiple-choice",
    question:
      "Which scheduling method identifies the sequence of tasks that determines the minimum project duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "Resource Smoothing",
      "Milestone Chart",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method (CPM) identifies the longest sequence of dependent tasks, defining the project's minimum completion time.",
    categories: ["Time Management"],
  },
  {
    id: 168,
    type: "hotspot",
    question:
      "On the provided network diagram, select the area that corresponds to the project's critical path.",
    imageUrl: "https://example.com/network-diagram-3.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "critical",
        label: "Critical Path",
        coordinates: { x: 140, y: 50, width: 100, height: 50 },
      },
      {
        id: "noncritical",
        label: "Non-Critical Path",
        coordinates: { x: 260, y: 50, width: 100, height: 50 },
      },
    ],
    answer: "critical",
    explanation:
      "The highlighted area (Critical Path) represents the sequence of tasks that determines the project's overall duration.",
    categories: ["Time Management"],
  },
  {
    id: 169,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions can help mitigate schedule delays?",
    options: [
      "Implementing fast tracking",
      "Applying resource leveling",
      "Ignoring minor delays",
      "Using schedule compression techniques",
    ],
    answers: [
      "Implementing fast tracking",
      "Applying resource leveling",
      "Using schedule compression techniques",
    ],
    explanation:
      "Mitigating schedule delays often involves techniques like fast tracking, resource leveling, and other compression methods to keep the project on track.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 170,
    type: "multiple-choice",
    question:
      "Which process ensures that project processes are evaluated for compliance with quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance focuses on evaluating project processes to ensure they adhere to defined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 171,
    type: "matching",
    question: "Match each quality management tool with its primary function.",
    pairs: [
      { left: "Histogram", right: "Display frequency distribution" },
      {
        left: "Scatter Diagram",
        right: "Show relationships between variables",
      },
      { left: "Control Chart", right: "Monitor process variability" },
    ],
    leftOptions: ["Histogram", "Scatter Diagram", "Control Chart"],
    rightOptions: [
      "Display frequency distribution",
      "Show relationships between variables",
      "Monitor process variability",
    ],
    explanation:
      "These quality tools help project teams analyze data to improve processes and outcomes.",
    categories: ["Quality Management"],
  },
  {
    id: 172,
    type: "fill-in-the-blank",
    question:
      "The ongoing effort to enhance project processes and outcomes through small, incremental improvements is referred to as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement is a key concept in quality management that focuses on ongoing enhancements to processes and deliverables.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 173,
    type: "multiple-choice",
    question:
      "Which risk analysis method uses numerical techniques to quantify potential project risks?",
    options: [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Identification",
      "Risk Monitoring",
    ],
    answer: "Quantitative Risk Analysis",
    explanation:
      "Quantitative Risk Analysis applies numerical methods to assess the potential impact of risks on project objectives.",
    categories: ["Risk Management"],
  },
  {
    id: 174,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions are part of effective risk management planning?",
    options: [
      "Identifying risks early",
      "Developing response strategies",
      "Ignoring low-impact risks",
      "Monitoring risk triggers continuously",
    ],
    answers: [
      "Identifying risks early",
      "Developing response strategies",
      "Monitoring risk triggers continuously",
    ],
    explanation:
      "Effective risk management involves early risk identification, proactive response planning, and continuous monitoring.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 175,
    type: "multiple-choice",
    question:
      "Which process involves formally evaluating vendor proposals before awarding a contract?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    answer: "Vendor Evaluation",
    explanation:
      "Vendor Evaluation is the process of comparing proposals against set criteria to determine the best fit for the project.",
    categories: ["Procurement Management"],
  },
  {
    id: 176,
    type: "fill-in-the-blank",
    question:
      "The formal document that outlines vendor responsibilities and project requirements is known as the ________.",
    answer: "Contract",
    explanation:
      "A contract details the terms, conditions, and expectations agreed upon by the vendor and the project team.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 177,
    type: "matching",
    question: "Match the communication artifacts with their primary purposes.",
    pairs: [
      { left: "Project Status Report", right: "Provide regular updates" },
      { left: "Meeting Minutes", right: "Document discussion and decisions" },
    ],
    leftOptions: ["Project Status Report", "Meeting Minutes"],
    rightOptions: [
      "Provide regular updates",
      "Document discussion and decisions",
    ],
    explanation:
      "Effective communication artifacts ensure that project progress and decisions are clearly documented and shared with stakeholders.",
    categories: ["Communication Management"],
  },
  {
    id: 178,
    type: "hotspot",
    question:
      "In the provided organizational chart, click the area that represents the primary communication center for the project team.",
    imageUrl: "https://example.com/org-chart.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "center",
        label: "Communication Center",
        coordinates: { x: 180, y: 90, width: 100, height: 50 },
      },
      {
        id: "periphery",
        label: "Peripheral Unit",
        coordinates: { x: 300, y: 90, width: 100, height: 50 },
      },
    ],
    answer: "center",
    explanation:
      "The Communication Center is the hub where key project information is consolidated and disseminated to the team.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 179,
    type: "multiple-choice",
    question:
      "Which activity is essential to ensure stakeholders are properly engaged throughout the project?",
    options: [
      "Developing a stakeholder management plan",
      "Excluding low-interest stakeholders from communication",
      "Limiting stakeholder feedback",
      "Assigning stakeholders to project tasks",
    ],
    answer: "Developing a stakeholder management plan",
    explanation:
      "A stakeholder management plan outlines strategies for engaging and communicating with all relevant stakeholders, ensuring their expectations are managed.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 180,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices improve stakeholder communication and engagement?",
    options: [
      "Regular feedback sessions",
      "Transparent reporting",
      "One-way communication only",
      "Inclusive decision-making processes",
    ],
    answers: [
      "Regular feedback sessions",
      "Transparent reporting",
      "Inclusive decision-making processes",
    ],
    explanation:
      "Improving stakeholder engagement relies on regular, transparent communication and involving stakeholders in key decisions.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 181,
    type: "multiple-choice",
    question:
      "Which activity is crucial to ensure that the project scope remains aligned with business objectives throughout the project?",
    options: [
      "Conducting periodic scope validation sessions",
      "Waiting until project completion to review scope",
      "Allowing scope changes without review",
      "Focusing solely on cost management",
    ],
    answer: "Conducting periodic scope validation sessions",
    explanation:
      "Regular scope validation helps confirm that the deliverables continue to meet business objectives and stakeholder expectations.",
    categories: ["Project Scope Management"],
  },
  {
    id: 182,
    type: "fill-in-the-blank",
    question:
      "A structured approach to breaking down project deliverables into smaller, manageable tasks is called the ________.",
    answer: "Work Breakdown Structure",
    explanation:
      "The Work Breakdown Structure (WBS) organizes the project into manageable sections, facilitating better control and execution.",
    categories: ["Project Scope Management"],
  },
  {
    id: 183,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions help in maintaining a clear and controlled project scope?",
    options: [
      "Documenting all scope changes",
      "Holding regular stakeholder review meetings",
      "Allowing unapproved changes",
      "Using a detailed Work Breakdown Structure",
    ],
    answers: [
      "Documenting all scope changes",
      "Holding regular stakeholder review meetings",
      "Using a detailed Work Breakdown Structure",
    ],
    explanation:
      "Effective scope management requires formal documentation, regular reviews, and a clear WBS to prevent scope creep.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 184,
    type: "multiple-choice",
    question:
      "Which method integrates cost, schedule, and scope to provide an objective measure of project performance?",
    options: [
      "Earned Value Management (EVM)",
      "Cost-Benefit Analysis",
      "Critical Path Method",
      "Resource Leveling",
    ],
    answer: "Earned Value Management (EVM)",
    explanation:
      "EVM is a systematic approach that combines scope, schedule, and cost to gauge project performance and predict future outcomes.",
    categories: ["Cost Management"],
  },
  {
    id: 185,
    type: "matching",
    question:
      "Match the following cost management elements with their primary purposes.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast project expenses" },
      { left: "Cost Budgeting", right: "Set spending limits" },
      { left: "Cost Control", right: "Monitor and manage expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast project expenses",
      "Set spending limits",
      "Monitor and manage expenditures",
    ],
    explanation:
      "These matches emphasize the distinct roles of cost estimation, budgeting, and control in managing project finances.",
    categories: ["Cost Management"],
  },
  {
    id: 186,
    type: "fill-in-the-blank",
    question:
      "The process of comparing actual project spending against the planned budget is known as ________.",
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring spending and taking corrective action when deviations from the budget occur.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 187,
    type: "multiple-choice",
    question:
      "Which technique is best used to shorten the project schedule by overlapping activities that were originally planned sequentially?",
    options: [
      "Fast Tracking",
      "Crashing",
      "Resource Leveling",
      "Schedule Buffering",
    ],
    answer: "Fast Tracking",
    explanation:
      "Fast tracking allows activities to be performed concurrently, thereby reducing the overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 188,
    type: "hotspot",
    question:
      "Review the provided project schedule diagram and select the section that represents the critical milestones.",
    imageUrl: "https://example.com/project-schedule.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "milestone",
        label: "Milestone Area",
        coordinates: { x: 160, y: 70, width: 80, height: 40 },
      },
      {
        id: "nonmilestone",
        label: "Non-Milestone Area",
        coordinates: { x: 260, y: 70, width: 80, height: 40 },
      },
    ],
    answer: "milestone",
    explanation:
      "The milestone area highlights key decision points and deliverable deadlines that are critical for project success.",
    categories: ["Time Management"],
  },
  {
    id: 189,
    type: "multiple-response",
    question:
      "Select all that apply: Which strategies can help mitigate schedule delays?",
    options: [
      "Implementing schedule compression techniques",
      "Improving resource allocation",
      "Ignoring minor delays",
      "Reassessing task dependencies",
    ],
    answers: [
      "Implementing schedule compression techniques",
      "Improving resource allocation",
      "Reassessing task dependencies",
    ],
    explanation:
      "Addressing delays effectively can involve compression, better resource management, and revisiting dependencies to optimize the schedule.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 190,
    type: "multiple-choice",
    question:
      "Which quality process focuses on identifying defects in deliverables through inspections and testing?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control is responsible for detecting defects through various inspection and testing methods to ensure deliverables meet quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 191,
    type: "matching",
    question:
      "Match the following quality management tools with their primary uses.",
    pairs: [
      { left: "Cause-and-Effect Diagram", right: "Identify root causes" },
      { left: "Control Chart", right: "Monitor process performance" },
      { left: "Pareto Chart", right: "Highlight major factors" },
    ],
    leftOptions: ["Cause-and-Effect Diagram", "Control Chart", "Pareto Chart"],
    rightOptions: [
      "Identify root causes",
      "Monitor process performance",
      "Highlight major factors",
    ],
    explanation:
      "Matching these tools with their uses helps in understanding how each contributes to effective quality management.",
    categories: ["Quality Management"],
  },
  {
    id: 192,
    type: "fill-in-the-blank",
    question:
      "The systematic effort to improve processes and reduce waste in project outcomes is called ________.",
    answer: "Lean Management",
    explanation:
      "Lean Management focuses on streamlining processes to enhance quality and efficiency by eliminating waste.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 193,
    type: "multiple-choice",
    question:
      "Which risk management process involves developing options and actions to enhance opportunities and reduce threats?",
    options: [
      "Risk Identification",
      "Risk Response Planning",
      "Risk Monitoring",
      "Risk Analysis",
    ],
    answer: "Risk Response Planning",
    explanation:
      "Risk Response Planning focuses on determining actions to mitigate threats and capitalize on opportunities identified during risk analysis.",
    categories: ["Risk Management"],
  },
  {
    id: 194,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities are integral to effective risk management?",
    options: [
      "Conducting thorough risk assessments",
      "Developing contingency plans",
      "Ignoring low probability risks",
      "Regularly updating the risk register",
    ],
    answers: [
      "Conducting thorough risk assessments",
      "Developing contingency plans",
      "Regularly updating the risk register",
    ],
    explanation:
      "Effective risk management includes comprehensive assessments, contingency planning, and continuous monitoring of risks.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 195,
    type: "multiple-choice",
    question:
      "Which process ensures that vendor selection is based on objective criteria and proposal evaluation?",
    options: [
      "Vendor Evaluation",
      "Procurement Planning",
      "Contract Administration",
      "Solicitation",
    ],
    answer: "Vendor Evaluation",
    explanation:
      "Vendor Evaluation systematically assesses vendor proposals against predetermined criteria to select the most suitable option.",
    categories: ["Procurement Management"],
  },
  {
    id: 196,
    type: "fill-in-the-blank",
    question:
      "A formal agreement outlining the expectations, deliverables, and responsibilities between the buyer and vendor is called a ________.",
    answer: "Contract",
    explanation:
      "The contract formalizes the terms of procurement, ensuring that both parties understand their obligations.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 197,
    type: "multiple-choice",
    question:
      "Which component of a communication management plan details the frequency and methods of information distribution?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Risk Management Plan",
      "Project Schedule",
    ],
    answer: "Communication Matrix",
    explanation:
      "A Communication Matrix outlines how and when project information will be shared with stakeholders, ensuring timely and effective communication.",
    categories: ["Communication Management"],
  },
  {
    id: 198,
    type: "hotspot",
    question:
      "Review the provided communication flow diagram and select the area that acts as the central information hub.",
    imageUrl: "https://example.com/communication-flow.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "hub",
        label: "Central Hub",
        coordinates: { x: 190, y: 80, width: 90, height: 50 },
      },
      {
        id: "edge",
        label: "Peripheral Node",
        coordinates: { x: 300, y: 80, width: 90, height: 50 },
      },
    ],
    answer: "hub",
    explanation:
      "The central hub is where critical project information is aggregated before being disseminated to stakeholders.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 199,
    type: "multiple-choice",
    question:
      "Which process helps in identifying, analyzing, and prioritizing the influence of project stakeholders?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis assesses the influence and interest of stakeholders, guiding the development of appropriate engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 200,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are key to successful stakeholder management?",
    options: [
      "Conducting regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "Limiting feedback to top management only",
      "Tailoring communication to stakeholder needs",
    ],
    answers: [
      "Conducting regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "Tailoring communication to stakeholder needs",
    ],
    explanation:
      "Successful stakeholder management requires ongoing engagement, accurate documentation, and customized communication strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 201,
    type: "multiple-choice",
    question: "What is the primary purpose of a project scope statement?",
    options: [
      "To outline project deliverables and boundaries",
      "To define team roles",
      "To set the project budget",
      "To schedule project activities",
    ],
    answer: "To outline project deliverables and boundaries",
    explanation:
      "The project scope statement defines what is included and excluded, guiding the creation of deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 202,
    type: "fill-in-the-blank",
    question:
      "The process of formalizing acceptance of completed project deliverables is known as ________.",
    answer: "Scope Verification",
    explanation:
      "Scope Verification confirms that deliverables meet the defined requirements and are acceptable to stakeholders.",
    categories: ["Project Scope Management"],
  },
  {
    id: 203,
    type: "multiple-response",
    question:
      "Select all that apply: Which of the following are benefits of a well-defined project scope?",
    options: [
      "Minimizes scope creep",
      "Improves stakeholder alignment",
      "Ensures resource over-allocation",
      "Facilitates accurate budgeting",
    ],
    answers: [
      "Minimizes scope creep",
      "Improves stakeholder alignment",
      "Facilitates accurate budgeting",
    ],
    explanation:
      "A clear scope helps prevent uncontrolled changes, aligns stakeholder expectations, and aids in planning resources and costs.",
    categories: ["Project Scope Management"],
  },
  // Cost Management (3)
  {
    id: 204,
    type: "multiple-choice",
    question:
      "Which technique is used to estimate project costs based on historical data?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous estimating uses past project data to quickly forecast current project costs.",
    categories: ["Cost Management"],
  },
  {
    id: 205,
    type: "matching",
    question:
      "Match the following cost management processes with their main focus.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting project costs" },
      { left: "Cost Budgeting", right: "Setting spending limits" },
      { left: "Cost Control", right: "Monitoring cost performance" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting project costs",
      "Setting spending limits",
      "Monitoring cost performance",
    ],
    explanation:
      "Each process plays a distinct role in ensuring the project remains within budget.",
    categories: ["Cost Management"],
  },
  {
    id: 206,
    type: "fill-in-the-blank",
    question:
      "The technique used to measure project performance by comparing work performed to the project plan is called ________.",
    answer: "Earned Value Management",
    explanation:
      "Earned Value Management (EVM) integrates cost, schedule, and scope to objectively measure performance.",
    categories: ["Cost Management"],
  },
  // Time Management (3)
  {
    id: 207,
    type: "multiple-choice",
    question: "What is the main purpose of creating a project schedule?",
    options: [
      "To assign roles to team members",
      "To determine the project budget",
      "To outline the timeline and sequencing of activities",
      "To ensure quality standards are met",
    ],
    answer: "To outline the timeline and sequencing of activities",
    explanation:
      "The schedule provides a roadmap for when and how project activities will occur.",
    categories: ["Time Management"],
  },
  {
    id: 208,
    type: "hotspot",
    question:
      "Examine the provided project timeline diagram and click on the area that shows the milestone phase.",
    imageUrl: "https://example.com/project-timeline.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "milestone",
        label: "Milestone Phase",
        coordinates: { x: 150, y: 80, width: 100, height: 50 },
      },
      {
        id: "regular",
        label: "Regular Phase",
        coordinates: { x: 300, y: 80, width: 100, height: 50 },
      },
    ],
    answer: "milestone",
    explanation:
      "The highlighted segment represents the milestone phase in the project timeline.",
    categories: ["Time Management"],
  },
  {
    id: 209,
    type: "multiple-response",
    question:
      "Select all that apply: Which techniques can be used to compress the project schedule?",
    options: ["Fast Tracking", "Crashing", "Resource Leveling", "Scope Creep"],
    answers: ["Fast Tracking", "Crashing", "Resource Leveling"],
    explanation:
      "Schedule compression can be achieved through fast tracking, crashing, and resource leveling.",
    categories: ["Time Management"],
  },
  // Quality Management (3)
  {
    id: 210,
    type: "multiple-choice",
    question:
      "Which process ensures that the project's quality requirements are met?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control involves monitoring deliverables to ensure they meet established quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 211,
    type: "matching",
    question: "Match the following quality tools with their purposes.",
    pairs: [
      { left: "Pareto Chart", right: "Identify major causes" },
      { left: "Flowchart", right: "Visualize process flow" },
      { left: "Control Chart", right: "Monitor process stability" },
    ],
    leftOptions: ["Pareto Chart", "Flowchart", "Control Chart"],
    rightOptions: [
      "Identify major causes",
      "Visualize process flow",
      "Monitor process stability",
    ],
    explanation:
      "These tools help analyze and maintain quality standards throughout the project.",
    categories: ["Quality Management"],
  },
  {
    id: 212,
    type: "fill-in-the-blank",
    question:
      "The continuous effort to improve processes and outcomes is known as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement involves regularly refining processes to enhance project results.",
    categories: ["Quality Management"],
  },
  // Risk Management (2)
  {
    id: 213,
    type: "multiple-choice",
    question:
      "Which process involves identifying potential risks that might affect the project?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the process of determining which risks may impact the project and documenting them.",
    categories: ["Risk Management"],
  },
  {
    id: 214,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions are critical for effective risk management?",
    options: [
      "Early risk identification",
      "Developing contingency plans",
      "Ignoring low-probability risks",
      "Regularly updating the risk register",
    ],
    answers: [
      "Early risk identification",
      "Developing contingency plans",
      "Regularly updating the risk register",
    ],
    explanation:
      "Effective risk management requires identifying risks early, planning responses, and continuously updating risk information.",
    categories: ["Risk Management"],
  },
  // Procurement Management (2)
  {
    id: 215,
    type: "multiple-choice",
    question:
      "Which document outlines the scope, terms, and conditions for procurement?",
    options: [
      "Procurement Statement of Work",
      "Project Charter",
      "Scope Statement",
      "Communication Plan",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work details the goods or services to be acquired and sets vendor expectations.",
    categories: ["Procurement Management"],
  },
  {
    id: 216,
    type: "fill-in-the-blank",
    question:
      "A legally binding agreement between the buyer and vendor is called a ________.",
    answer: "Contract",
    explanation:
      "A contract formalizes the terms of procurement and ensures both parties understand their responsibilities.",
    categories: ["Procurement Management"],
  },
  // Communication Management (2)
  {
    id: 217,
    type: "multiple-choice",
    question:
      "Which component of a communication management plan defines how and when information is shared?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Schedule",
      "Risk Management Plan",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix specifies the methods, frequency, and recipients of project information.",
    categories: ["Communication Management"],
  },
  {
    id: 218,
    type: "hotspot",
    question:
      "Review the provided communication diagram and click on the area representing the central communication hub.",
    imageUrl: "https://example.com/communication-diagram.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "hub",
        label: "Communication Hub",
        coordinates: { x: 170, y: 90, width: 80, height: 50 },
      },
      {
        id: "node",
        label: "Peripheral Node",
        coordinates: { x: 280, y: 90, width: 80, height: 50 },
      },
    ],
    answer: "hub",
    explanation:
      "The central hub is where critical project information is gathered before distribution.",
    categories: ["Communication Management"],
  },
  // Stakeholder Management (2)
  {
    id: 219,
    type: "multiple-choice",
    question:
      "Which process helps analyze stakeholder influence and determine appropriate engagement strategies?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis assesses the level of influence and interest of stakeholders, guiding effective engagement.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 220,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance stakeholder engagement?",
    options: [
      "Regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "One-way communication",
      "Tailoring communication strategies",
    ],
    answers: [
      "Regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "Tailoring communication strategies",
    ],
    explanation:
      "Enhancing stakeholder engagement involves consistent interactions, up-to-date records, and customized communication.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 221,
    type: "multiple-choice",
    question: "Which element is critical for defining project boundaries?",
    options: [
      "Scope Statement",
      "Project Charter",
      "Budget Report",
      "Risk Register",
    ],
    answer: "Scope Statement",
    explanation:
      "A Scope Statement outlines the project deliverables and boundaries, ensuring clarity.",
    categories: ["Project Scope Management"],
  },
  {
    id: 222,
    type: "fill-in-the-blank",
    question:
      "The method for breaking project work into manageable parts is called the ________.",
    answer: "Work Breakdown Structure",
    explanation:
      "A Work Breakdown Structure (WBS) decomposes the project into smaller components for easier management.",
    categories: ["Project Scope Management"],
  },
  {
    id: 223,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices help maintain a clear project scope?",
    options: [
      "Regular reviews",
      "Detailed documentation",
      "Ad hoc changes",
      "Formal change control",
    ],
    answers: [
      "Regular reviews",
      "Detailed documentation",
      "Formal change control",
    ],
    explanation:
      "Maintaining a clear scope relies on regular reviews, thorough documentation, and a formal change control process.",
    categories: ["Project Scope Management"],
  },
  {
    id: 224,
    type: "multiple-choice",
    question:
      "Which cost estimation method is best suited for projects with limited detailed information?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous Estimating uses historical data from similar projects, making it ideal when details are scarce.",
    categories: ["Cost Management"],
  },
  {
    id: 225,
    type: "matching",
    question: "Match each cost management process with its function.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast expenses" },
      { left: "Cost Budgeting", right: "Set spending limits" },
      { left: "Cost Control", right: "Monitor expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast expenses",
      "Set spending limits",
      "Monitor expenditures",
    ],
    explanation: "Each process has a unique role in managing project finances.",
    categories: ["Cost Management"],
  },
  {
    id: 226,
    type: "fill-in-the-blank",
    question:
      "The integrated approach that compares planned and actual project performance is called ________.",
    answer: "Earned Value Management",
    explanation:
      "Earned Value Management (EVM) combines scope, schedule, and cost data to evaluate performance.",
    categories: ["Cost Management"],
  },
  {
    id: 227,
    type: "multiple-choice",
    question:
      "Which scheduling method identifies the tasks that directly affect the project duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "Milestone Chart",
      "PERT Analysis",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method (CPM) identifies the sequence of tasks that determines the project's minimum duration.",
    categories: ["Time Management"],
  },
  {
    id: 228,
    type: "hotspot",
    question:
      "Click on the segment that represents the critical path in the provided network diagram.",
    imageUrl: "https://example.com/network-diagram.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "cp",
        label: "Critical Path",
        coordinates: { x: 120, y: 50, width: 100, height: 50 },
      },
      {
        id: "noncp",
        label: "Non-Critical Path",
        coordinates: { x: 240, y: 50, width: 100, height: 50 },
      },
    ],
    answer: "cp",
    explanation:
      "The critical path is the sequence of tasks that determines the project's minimum completion time.",
    categories: ["Time Management"],
  },
  {
    id: 229,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions can help mitigate schedule delays?",
    options: [
      "Fast Tracking",
      "Crashing",
      "Ignoring delays",
      "Reassessing dependencies",
    ],
    answers: ["Fast Tracking", "Crashing", "Reassessing dependencies"],
    explanation:
      "Mitigating delays can involve techniques like fast tracking, crashing, and reassessing task dependencies.",
    categories: ["Time Management"],
  },
  {
    id: 230,
    type: "multiple-choice",
    question:
      "Which process is primarily focused on detecting defects in deliverables?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control involves inspecting deliverables to ensure they meet quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 231,
    type: "matching",
    question: "Match the quality management tool with its primary function.",
    pairs: [
      { left: "Pareto Chart", right: "Identify major issues" },
      { left: "Control Chart", right: "Monitor process variations" },
      { left: "Histogram", right: "Display frequency distribution" },
    ],
    leftOptions: ["Pareto Chart", "Control Chart", "Histogram"],
    rightOptions: [
      "Identify major issues",
      "Monitor process variations",
      "Display frequency distribution",
    ],
    explanation:
      "These tools help analyze quality data and identify areas for improvement.",
    categories: ["Quality Management"],
  },
  {
    id: 232,
    type: "fill-in-the-blank",
    question:
      "The ongoing pursuit of enhanced processes and deliverables is known as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement focuses on incremental enhancements to project processes and outcomes.",
    categories: ["Quality Management"],
  },
  {
    id: 233,
    type: "multiple-choice",
    question:
      "Which process involves determining which risks may impact the project?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the process of documenting potential risks that could affect the project.",
    categories: ["Risk Management"],
  },
  {
    id: 234,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions are essential for proactive risk management?",
    options: [
      "Early risk identification",
      "Developing contingency plans",
      "Ignoring minor risks",
      "Regular risk monitoring",
    ],
    answers: [
      "Early risk identification",
      "Developing contingency plans",
      "Regular risk monitoring",
    ],
    explanation:
      "Proactive risk management requires early detection, planning responses, and continuous monitoring.",
    categories: ["Risk Management"],
  },
  {
    id: 235,
    type: "multiple-choice",
    question:
      "Which document details the requirements and conditions for acquiring goods or services?",
    options: [
      "Project Charter",
      "Procurement Statement of Work",
      "Scope Statement",
      "Communication Plan",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work specifies what is to be procured and sets vendor expectations.",
    categories: ["Procurement Management"],
  },
  {
    id: 236,
    type: "fill-in-the-blank",
    question:
      "A legally binding agreement between the buyer and vendor is called a ________.",
    answer: "Contract",
    explanation:
      "A Contract formalizes the terms and conditions of procurement, ensuring clarity and accountability.",
    categories: ["Procurement Management"],
  },
  {
    id: 237,
    type: "multiple-choice",
    question:
      "Which component of a communication plan outlines the methods and frequency of information sharing?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Risk Register",
      "Activity List",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix details how and when project information is communicated to stakeholders.",
    categories: ["Communication Management"],
  },
  {
    id: 238,
    type: "hotspot",
    question:
      "On the provided diagram, click the area representing the primary communication hub.",
    imageUrl: "https://example.com/communication-hub.png", // Replace with your actual image URL
    hotspotAreas: [
      {
        id: "hub",
        label: "Communication Hub",
        coordinates: { x: 200, y: 70, width: 90, height: 50 },
      },
      {
        id: "branch",
        label: "Branch",
        coordinates: { x: 320, y: 70, width: 90, height: 50 },
      },
    ],
    answer: "hub",
    explanation:
      "The primary communication hub is where key project information is centralized.",
    categories: ["Communication Management"],
  },
  {
    id: 239,
    type: "multiple-choice",
    question:
      "Which process is critical for analyzing stakeholder influence and determining engagement strategies?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis assesses the influence and interest of stakeholders, guiding effective engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 240,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance stakeholder engagement?",
    options: [
      "Regular engagement sessions",
      "Updated stakeholder register",
      "One-way communication",
      "Tailored communication",
    ],
    answers: [
      "Regular engagement sessions",
      "Updated stakeholder register",
      "Tailored communication",
    ],
    explanation:
      "Enhancing stakeholder engagement requires consistent interactions, accurate records, and communication tailored to stakeholder needs.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 241,
    type: "multiple-choice",
    question:
      "Which document best defines the boundaries and deliverables of a project?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Budget Report",
      "Risk Register",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly outlines what is included—and excluded—in the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 242,
    type: "fill-in-the-blank",
    question:
      "The process of obtaining formal sign-off on completed project deliverables is called ________.",
    answer: "Scope Validation",
    explanation:
      "Scope Validation is the process where stakeholders formally accept the project deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 243,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are key to preventing scope creep?",
    options: [
      "Implementing a formal change control process",
      "Maintaining comprehensive documentation",
      "Allowing unapproved changes",
      "Conducting regular stakeholder reviews",
    ],
    answers: [
      "Implementing a formal change control process",
      "Maintaining comprehensive documentation",
      "Conducting regular stakeholder reviews",
    ],
    explanation:
      "A formal change control process, thorough documentation, and periodic reviews help keep the project scope under control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 244,
    type: "multiple-choice",
    question:
      "Which cost estimation technique relies on historical data from similar projects?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous Estimating uses data from past similar projects to estimate costs quickly.",
    categories: ["Cost Management"],
  },
  {
    id: 245,
    type: "matching",
    question: "Match the cost management process with its primary function.",
    pairs: [
      { left: "Cost Estimation", right: "Predict project costs" },
      { left: "Cost Budgeting", right: "Establish the spending plan" },
      { left: "Cost Control", right: "Monitor and adjust expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Predict project costs",
      "Establish the spending plan",
      "Monitor and adjust expenditures",
    ],
    explanation:
      "Each process plays a distinct role in ensuring project finances are well-managed.",
    categories: ["Cost Management"],
  },
  {
    id: 246,
    type: "fill-in-the-blank",
    question:
      "The practice of comparing planned project costs to actual costs is called ________.",
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring and managing cost performance against the budget.",
    categories: ["Cost Management"],
  },
  {
    id: 247,
    type: "multiple-choice",
    question: "What is the main purpose of creating a project schedule?",
    options: [
      "Assign tasks to team members",
      "Outline activity sequencing and durations",
      "Define project risks",
      "Set quality standards",
    ],
    answer: "Outline activity sequencing and durations",
    explanation:
      "A project schedule defines when tasks will be performed and in what order, ensuring a coherent timeline.",
    categories: ["Time Management"],
  },
  {
    id: 248,
    type: "hotspot",
    question:
      "Click on the area in the network diagram that represents the critical path.",
    imageUrl: "https://example.com/network-diagram2.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "critical",
        label: "Critical Path",
        coordinates: { x: 130, y: 60, width: 100, height: 50 },
      },
      {
        id: "nonCritical",
        label: "Non-Critical Path",
        coordinates: { x: 250, y: 60, width: 100, height: 50 },
      },
    ],
    answer: "critical",
    explanation:
      "The critical path determines the minimum project duration and is represented by the highlighted segment.",
    categories: ["Time Management"],
  },
  {
    id: 249,
    type: "multiple-response",
    question:
      "Select all that apply: Which techniques are used to compress a project schedule?",
    options: [
      "Fast Tracking",
      "Crashing",
      "Resource Leveling",
      "Scope Expansion",
    ],
    answers: ["Fast Tracking", "Crashing", "Resource Leveling"],
    explanation:
      "Fast tracking, crashing, and resource leveling are common techniques to reduce overall project duration.",
    categories: ["Time Management"],
  },
  {
    id: 250,
    type: "multiple-choice",
    question:
      "Which process is responsible for detecting defects in project deliverables?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control focuses on inspecting deliverables to ensure they meet defined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 251,
    type: "matching",
    question: "Match each quality tool with its primary use.",
    pairs: [
      { left: "Pareto Chart", right: "Identify the most significant factors" },
      { left: "Flowchart", right: "Map out process steps" },
      { left: "Control Chart", right: "Monitor process performance" },
    ],
    leftOptions: ["Pareto Chart", "Flowchart", "Control Chart"],
    rightOptions: [
      "Identify the most significant factors",
      "Map out process steps",
      "Monitor process performance",
    ],
    explanation:
      "These quality tools help diagnose process issues and maintain quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 252,
    type: "fill-in-the-blank",
    question:
      "The ongoing process of refining project processes to enhance outcomes is known as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement involves regularly enhancing processes to improve project results.",
    categories: ["Quality Management"],
  },
  {
    id: 253,
    type: "multiple-choice",
    question:
      "Which process involves identifying potential risks to the project?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the first step in risk management, where potential risks are documented for further action.",
    categories: ["Risk Management"],
  },
  {
    id: 254,
    type: "multiple-response",
    question:
      "Select all that apply: Which actions are essential for effective risk management?",
    options: [
      "Early risk identification",
      "Developing contingency plans",
      "Ignoring low probability risks",
      "Continuous risk monitoring",
    ],
    answers: [
      "Early risk identification",
      "Developing contingency plans",
      "Continuous risk monitoring",
    ],
    explanation:
      "Effective risk management requires identifying risks early, planning responses, and continuously monitoring them.",
    categories: ["Risk Management"],
  },
  {
    id: 255,
    type: "multiple-choice",
    question:
      "Which document specifies the detailed requirements for external procurement?",
    options: [
      "Project Charter",
      "Procurement Statement of Work",
      "Scope Statement",
      "Communication Plan",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work provides detailed requirements for goods or services to be procured.",
    categories: ["Procurement Management"],
  },
  {
    id: 256,
    type: "fill-in-the-blank",
    question:
      "A formal agreement between a buyer and vendor is called a ________.",
    answer: "Contract",
    explanation:
      "A Contract legally binds the buyer and vendor to the terms of procurement.",
    categories: ["Procurement Management"],
  },
  {
    id: 257,
    type: "multiple-choice",
    question:
      "Which component of a communication plan outlines how project information is disseminated?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Risk Management Plan",
      "Activity Log",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix details the methods, frequency, and recipients of project communications.",
    categories: ["Communication Management"],
  },
  {
    id: 258,
    type: "hotspot",
    question:
      "On the provided diagram, click the area that represents the central communication node.",
    imageUrl: "https://example.com/comm-diagram.png", // Replace with actual image URL
    hotspotAreas: [
      {
        id: "central",
        label: "Central Node",
        coordinates: { x: 210, y: 70, width: 80, height: 50 },
      },
      {
        id: "peripheral",
        label: "Peripheral Node",
        coordinates: { x: 320, y: 70, width: 80, height: 50 },
      },
    ],
    answer: "central",
    explanation:
      "The central communication node is where key project information converges before distribution.",
    categories: ["Communication Management"],
  },
  {
    id: 259,
    type: "multiple-choice",
    question:
      "Which process is critical for analyzing stakeholder influence and guiding engagement strategies?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates stakeholder influence and interest, helping to tailor engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 260,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance stakeholder engagement?",
    options: [
      "Regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "One-way communication",
      "Tailored communication methods",
    ],
    answers: [
      "Regular engagement sessions",
      "Maintaining an updated stakeholder register",
      "Tailored communication methods",
    ],
    explanation:
      "Effective stakeholder engagement involves ongoing interactions, current records, and communication tailored to stakeholder needs.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 261,
    type: "multiple-choice",
    question:
      "Which step is essential for finalizing the project scope before execution begins?",
    options: [
      "Conducting a kickoff meeting",
      "Developing a Scope Statement",
      "Creating a project schedule",
      "Establishing a risk register",
    ],
    answer: "Developing a Scope Statement",
    explanation:
      "Developing a Scope Statement is critical to clearly define project boundaries and deliverables before the project starts.",
    categories: ["Project Scope Management"],
  },
  {
    id: 262,
    type: "fill-in-the-blank",
    question:
      "The document used to record approved changes to the project scope is known as the ________.",
    answer: "Scope Change Log",
    explanation:
      "A Scope Change Log records all approved scope modifications, ensuring clarity and traceability.",
    categories: ["Project Scope Management"],
  },
  {
    id: 263,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities help maintain project scope control?",
    options: [
      "Regular scope reviews",
      "Implementing a change control process",
      "Allowing informal changes",
      "Detailed documentation of requirements",
    ],
    answers: [
      "Regular scope reviews",
      "Implementing a change control process",
      "Detailed documentation of requirements",
    ],
    explanation:
      "Regular reviews, a formal change control process, and thorough documentation are key to maintaining scope control.",
    categories: ["Project Scope Management"],
  },
  {
    id: 264,
    type: "multiple-choice",
    question:
      "Which cost estimation method is most appropriate when detailed project information is limited?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Analogous Estimating",
    explanation:
      "Analogous Estimating relies on historical data and is useful when detailed project data is not yet available.",
    categories: ["Cost Management"],
  },
  {
    id: 265,
    type: "matching",
    question:
      "Match the following cost management processes with their primary focus.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting project costs" },
      { left: "Cost Budgeting", right: "Establishing the spending plan" },
      { left: "Cost Control", right: "Monitoring and managing expenses" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting project costs",
      "Establishing the spending plan",
      "Monitoring and managing expenses",
    ],
    explanation:
      "Each process has a distinct function: estimating costs, planning budgets, and controlling expenditures.",
    categories: ["Cost Management"],
  },
  {
    id: 266,
    type: "fill-in-the-blank",
    question:
      "Comparing actual spending to the planned budget is a key aspect of ________.",
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring actual expenditures against the budget and taking corrective action as needed.",
    categories: ["Cost Management"],
  },
  {
    id: 267,
    type: "multiple-choice",
    question:
      "Which scheduling technique identifies the tasks that directly impact the project’s overall duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "Milestone Chart",
      "Resource Leveling",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method pinpoints the longest sequence of dependent tasks that determines the project duration.",
    categories: ["Time Management"],
  },
  {
    id: 268,
    type: "multiple-response",
    question:
      "Select all that apply: Which techniques can help compress a project schedule?",
    options: ["Fast Tracking", "Crashing", "Resource Leveling", "Scope Creep"],
    answers: ["Fast Tracking", "Crashing", "Resource Leveling"],
    explanation:
      "Fast tracking, crashing, and resource leveling are common techniques used to shorten the overall schedule.",
    categories: ["Time Management"],
  },
  {
    id: 269,
    type: "fill-in-the-blank",
    question:
      "Adjusting the project timeline based on resource availability is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling helps adjust the schedule to accommodate available resources and avoid over-allocation.",
    categories: ["Time Management"],
  },
  {
    id: 270,
    type: "multiple-choice",
    question:
      "Which process involves inspecting project deliverables to ensure they meet quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control is focused on inspecting and testing deliverables to verify that they adhere to quality requirements.",
    categories: ["Quality Management"],
  },
  {
    id: 271,
    type: "matching",
    question: "Match each quality tool with its main function.",
    pairs: [
      { left: "Pareto Chart", right: "Identify major issues" },
      { left: "Flowchart", right: "Visualize process flow" },
      { left: "Control Chart", right: "Monitor process variability" },
    ],
    leftOptions: ["Pareto Chart", "Flowchart", "Control Chart"],
    rightOptions: [
      "Identify major issues",
      "Visualize process flow",
      "Monitor process variability",
    ],
    explanation:
      "These quality tools help teams analyze data to identify and address quality issues effectively.",
    categories: ["Quality Management"],
  },
  {
    id: 272,
    type: "fill-in-the-blank",
    question:
      "The systematic pursuit of improvements to processes and products is called ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement is an ongoing effort to enhance project processes and outcomes over time.",
    categories: ["Quality Management"],
  },
  {
    id: 273,
    type: "multiple-choice",
    question:
      "Which process is dedicated to identifying potential risks that could affect a project?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification involves documenting all potential risks that could impact the project.",
    categories: ["Risk Management"],
  },
  {
    id: 274,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are critical for proactive risk management?",
    options: [
      "Early risk identification",
      "Developing contingency plans",
      "Ignoring low-impact risks",
      "Regular risk monitoring",
    ],
    answers: [
      "Early risk identification",
      "Developing contingency plans",
      "Regular risk monitoring",
    ],
    explanation:
      "Proactive risk management relies on early identification, planning effective responses, and continuous monitoring of risks.",
    categories: ["Risk Management"],
  },
  {
    id: 275,
    type: "multiple-choice",
    question:
      "Which document provides detailed requirements and expectations for external procurement?",
    options: [
      "Project Charter",
      "Procurement Statement of Work",
      "Scope Statement",
      "Risk Register",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work specifies the detailed requirements for goods or services, setting clear vendor expectations.",
    categories: ["Procurement Management"],
  },
  {
    id: 276,
    type: "fill-in-the-blank",
    question:
      "A legally binding agreement between a buyer and a vendor is known as a ________.",
    answer: "Contract",
    explanation:
      "A Contract formalizes the terms of procurement, ensuring both parties agree to the set terms.",
    categories: ["Procurement Management"],
  },
  {
    id: 277,
    type: "multiple-choice",
    question:
      "Which element of a communication plan details how often and by what means project information is shared?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Schedule",
      "Risk Management Plan",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix specifies the channels, frequency, and recipients of project communications.",
    categories: ["Communication Management"],
  },
  {
    id: 278,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices can improve overall project communication?",
    options: [
      "Regular status meetings",
      "Clear documentation",
      "Limiting communication channels",
      "Using collaborative tools",
    ],
    answers: [
      "Regular status meetings",
      "Clear documentation",
      "Using collaborative tools",
    ],
    explanation:
      "Improved communication is achieved through regular meetings, clear messaging, and modern collaboration tools.",
    categories: ["Communication Management"],
  },
  {
    id: 279,
    type: "multiple-choice",
    question:
      "Which process helps determine the influence and interest of project stakeholders?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis assesses the power and interest of each stakeholder to guide appropriate engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 280,
    type: "matching",
    question: "Match each stakeholder management activity with its purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "List all potential stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop strategies for involvement",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "List all potential stakeholders",
      "Develop strategies for involvement",
    ],
    explanation:
      "These activities are essential for understanding and effectively engaging stakeholders throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 281,
    type: "multiple-choice",
    question: "Which process finalizes project requirements and deliverables?",
    options: [
      "Scope Definition",
      "Scope Planning",
      "Scope Validation",
      "Change Control",
    ],
    answer: "Scope Validation",
    explanation:
      "Scope Validation is the process where stakeholders formally accept the completed deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 282,
    type: "fill-in-the-blank",
    question:
      "The detailed document that outlines what is and is not included in the project is the ________.",
    answer: "Scope Statement",
    explanation:
      "The Scope Statement provides detailed boundaries and deliverables for the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 283,
    type: "multiple-response",
    question:
      "Select all that apply: Which of the following actions contribute to effective scope management?",
    options: [
      "Conducting regular scope reviews",
      "Implementing a formal change control process",
      "Frequent undocumented changes",
      "Involving key stakeholders in planning",
    ],
    answers: [
      "Conducting regular scope reviews",
      "Implementing a formal change control process",
      "Involving key stakeholders in planning",
    ],
    explanation:
      "Regular reviews, formal change control, and stakeholder involvement help maintain scope integrity.",
    categories: ["Project Scope Management"],
  },
  {
    id: 284,
    type: "multiple-choice",
    question:
      "Which cost estimation technique uses statistical relationships between historical data and other variables?",
    options: [
      "Analogous Estimating",
      "Parametric Estimating",
      "Bottom-Up Estimating",
      "Expert Judgment",
    ],
    answer: "Parametric Estimating",
    explanation:
      "Parametric Estimating uses statistical relationships to calculate project costs based on historical data.",
    categories: ["Cost Management"],
  },
  {
    id: 285,
    type: "matching",
    question:
      "Match the following cost management activities with their descriptions.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting the overall cost" },
      { left: "Cost Budgeting", right: "Allocating the cost baseline" },
      { left: "Cost Control", right: "Monitoring and regulating spending" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting the overall cost",
      "Allocating the cost baseline",
      "Monitoring and regulating spending",
    ],
    explanation:
      "Each cost management process has a unique role in managing project finances.",
    categories: ["Cost Management"],
  },
  {
    id: 286,
    type: "fill-in-the-blank",
    question:
      "Tracking actual expenditures against the planned budget is an example of ________.",
    answer: "Cost Control",
    explanation:
      "Cost Control involves monitoring and comparing actual spend to the budget to ensure financial performance.",
    categories: ["Cost Management"],
  },
  {
    id: 287,
    type: "multiple-choice",
    question:
      "Which scheduling technique identifies the sequence of tasks that directly influences the project duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "PERT Analysis",
      "Milestone Chart",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method identifies the longest sequence of dependent tasks that determines the project duration.",
    categories: ["Time Management"],
  },
  {
    id: 288,
    type: "multiple-response",
    question:
      "Select all that apply: Which techniques are commonly used for schedule compression?",
    options: [
      "Fast Tracking",
      "Crashing",
      "Resource Smoothing",
      "Rebaselining",
    ],
    answers: ["Fast Tracking", "Crashing", "Resource Smoothing"],
    explanation:
      "Fast tracking, crashing, and resource smoothing are common methods for compressing the project schedule.",
    categories: ["Time Management"],
  },
  {
    id: 289,
    type: "fill-in-the-blank",
    question:
      "Adjusting the schedule based on resource availability is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling adjusts the schedule to account for resource constraints and avoid overallocation.",
    categories: ["Time Management"],
  },
  {
    id: 290,
    type: "multiple-choice",
    question:
      "Which quality management process focuses on ensuring that project processes are in line with quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance evaluates and improves processes to ensure they conform to quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 291,
    type: "matching",
    question: "Match each quality tool with its primary purpose.",
    pairs: [
      { left: "Pareto Chart", right: "Prioritize problems" },
      { left: "Flowchart", right: "Visualize process steps" },
      { left: "Control Chart", right: "Track process variability" },
    ],
    leftOptions: ["Pareto Chart", "Flowchart", "Control Chart"],
    rightOptions: [
      "Prioritize problems",
      "Visualize process steps",
      "Track process variability",
    ],
    explanation:
      "These quality tools help identify, visualize, and control quality issues.",
    categories: ["Quality Management"],
  },
  {
    id: 292,
    type: "fill-in-the-blank",
    question:
      "An ongoing effort to improve project processes is referred to as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement is the systematic effort to enhance processes and outcomes over time.",
    categories: ["Quality Management"],
  },
  {
    id: 293,
    type: "multiple-choice",
    question: "Which process is the first step in managing project risks?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the initial step in risk management, where potential risks are listed and documented.",
    categories: ["Risk Management"],
  },
  {
    id: 294,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices contribute to effective risk management?",
    options: [
      "Early risk detection",
      "Developing contingency plans",
      "Ignoring low-impact risks",
      "Continuous risk monitoring",
    ],
    answers: [
      "Early risk detection",
      "Developing contingency plans",
      "Continuous risk monitoring",
    ],
    explanation:
      "Effective risk management involves early detection, planning, and continuous monitoring of risks.",
    categories: ["Risk Management"],
  },
  {
    id: 295,
    type: "multiple-choice",
    question:
      "Which document outlines the detailed requirements for goods and services in external procurement?",
    options: [
      "Project Charter",
      "Procurement Statement of Work",
      "Scope Statement",
      "Risk Register",
    ],
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work details the specifications and expectations for external procurement.",
    categories: ["Procurement Management"],
  },
  {
    id: 296,
    type: "fill-in-the-blank",
    question:
      "A formal, legally binding agreement between a buyer and vendor is called a ________.",
    answer: "Contract",
    explanation:
      "A Contract outlines the terms and conditions for procurement and legally binds both parties.",
    categories: ["Procurement Management"],
  },
  {
    id: 297,
    type: "multiple-choice",
    question:
      "Which component of a communication plan defines the frequency and method of information sharing?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Schedule",
      "Risk Management Plan",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix specifies how, when, and through which channels project information will be distributed.",
    categories: ["Communication Management"],
  },
  {
    id: 298,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance effective project communication?",
    options: [
      "Regular team meetings",
      "Clear, concise documentation",
      "One-way communication",
      "Utilizing collaboration platforms",
    ],
    answers: [
      "Regular team meetings",
      "Clear, concise documentation",
      "Utilizing collaboration platforms",
    ],
    explanation:
      "Effective communication is achieved through frequent meetings, clear messaging, and the use of collaborative tools.",
    categories: ["Communication Management"],
  },
  {
    id: 299,
    type: "multiple-choice",
    question:
      "Which process assesses the influence and interest of stakeholders to guide engagement strategies?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates each stakeholder's influence and interest, informing tailored engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 300,
    type: "matching",
    question: "Match each stakeholder management activity with its purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "Catalog all potential stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop methods for active involvement",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "Catalog all potential stakeholders",
      "Develop methods for active involvement",
    ],
    explanation:
      "These activities help ensure that all stakeholders are identified and effectively engaged throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 301,
    type: "multiple-choice",
    question: "Which process formalizes changes to the project scope?",
    options: [
      "Scope Definition",
      "Scope Change Control",
      "Scope Planning",
      "Scope Validation",
    ],
    answer: "Scope Change Control",
    explanation:
      "Scope Change Control ensures that any modifications to the project scope are reviewed, approved, and documented before implementation.",
    categories: ["Project Scope Management"],
  },
  {
    id: 302,
    type: "fill-in-the-blank",
    question:
      "The document that records and tracks all approved changes to the project scope is called the ________.",
    answer: "Scope Change Log",
    explanation:
      "The Scope Change Log maintains a record of all scope modifications, ensuring transparency and traceability throughout the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 303,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices help ensure a clear project scope?",
    options: [
      "Establishing a detailed Work Breakdown Structure",
      "Regular stakeholder alignment meetings",
      "Implementing informal, ad hoc changes",
      "Using a formal change control process",
    ],
    answers: [
      "Establishing a detailed Work Breakdown Structure",
      "Regular stakeholder alignment meetings",
      "Using a formal change control process",
    ],
    explanation:
      "A clear scope is maintained by decomposing work, aligning stakeholders regularly, and controlling changes through formal processes.",
    categories: ["Project Scope Management"],
  },
  {
    id: 304,
    type: "multiple-choice",
    question:
      "Which cost estimation method uses statistical relationships between historical data and other variables?",
    options: [
      "Analogous Estimating",
      "Parametric Estimating",
      "Bottom-Up Estimating",
      "Three-Point Estimating",
    ],
    answer: "Parametric Estimating",
    explanation:
      "Parametric Estimating applies statistical relationships to predict costs, making it effective when similar projects' data is available.",
    categories: ["Cost Management"],
  },
  {
    id: 305,
    type: "matching",
    question: "Match each cost management process with its function.",
    pairs: [
      { left: "Cost Estimation", right: "Forecast project costs" },
      { left: "Cost Budgeting", right: "Develop a spending plan" },
      { left: "Cost Control", right: "Monitor actual spending" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecast project costs",
      "Develop a spending plan",
      "Monitor actual spending",
    ],
    explanation:
      "Each process has a specific role: estimating costs, planning budgets, and controlling expenditures.",
    categories: ["Cost Management"],
  },
  {
    id: 306,
    type: "fill-in-the-blank",
    question:
      "The difference between planned and actual project spending is referred to as ________.",
    answer: "Cost Variance",
    explanation:
      "Cost Variance quantifies the difference between budgeted and actual costs, serving as a key metric in cost management.",
    categories: ["Cost Management"],
  },
  {
    id: 307,
    type: "multiple-choice",
    question:
      "Which scheduling technique optimizes the use of available resources by adjusting non-critical task start times?",
    options: [
      "Critical Path Method",
      "Resource Smoothing",
      "Fast Tracking",
      "Crashing",
    ],
    answer: "Resource Smoothing",
    explanation:
      "Resource Smoothing adjusts the schedule without changing the critical path, ensuring resources are optimally allocated.",
    categories: ["Time Management"],
  },
  {
    id: 308,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are considered when developing a project schedule?",
    options: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
      "Quality control methods",
    ],
    answers: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
    ],
    explanation:
      "Project schedules are developed by considering task durations, dependencies, and available resources.",
    categories: ["Time Management"],
  },
  {
    id: 309,
    type: "fill-in-the-blank",
    question:
      "A formal review at the end of a project phase, used to decide if the project should continue, is called a ________.",
    answer: "Phase Gate",
    explanation:
      "A Phase Gate review is used to assess project progress and make decisions about moving to the next phase.",
    categories: ["Time Management"],
  },
  {
    id: 310,
    type: "multiple-choice",
    question:
      "Which quality management process focuses on ensuring that project processes meet defined quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance evaluates project processes to ensure they adhere to the established quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 311,
    type: "matching",
    question: "Match each quality metric with its description.",
    pairs: [
      { left: "Defect Density", right: "Number of defects per unit" },
      {
        left: "Customer Satisfaction",
        right: "Feedback rating from stakeholders",
      },
      { left: "Process Capability", right: "Measure of process performance" },
    ],
    leftOptions: [
      "Defect Density",
      "Customer Satisfaction",
      "Process Capability",
    ],
    rightOptions: [
      "Number of defects per unit",
      "Feedback rating from stakeholders",
      "Measure of process performance",
    ],
    explanation:
      "These metrics help quantify quality in terms of defects, stakeholder satisfaction, and process performance.",
    categories: ["Quality Management"],
  },
  {
    id: 312,
    type: "fill-in-the-blank",
    question:
      "The statistical methodology aimed at reducing process variability is known as ________.",
    answer: "Six Sigma",
    explanation:
      "Six Sigma uses data-driven techniques to reduce variability and improve process quality.",
    categories: ["Quality Management"],
  },
  {
    id: 313,
    type: "multiple-choice",
    question:
      "Which quantitative risk management process assigns numerical values to risk probability and impact?",
    options: [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Identification",
      "Risk Monitoring",
    ],
    answer: "Quantitative Risk Analysis",
    explanation:
      "Quantitative Risk Analysis uses numerical data to estimate risk impacts and probabilities, helping prioritize risks.",
    categories: ["Risk Management"],
  },
  {
    id: 314,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are typically evaluated during risk analysis?",
    options: [
      "Probability of occurrence",
      "Impact on project objectives",
      "Detection difficulty",
      "Team morale",
    ],
    answers: [
      "Probability of occurrence",
      "Impact on project objectives",
      "Detection difficulty",
    ],
    explanation:
      "Risk analysis often involves assessing the likelihood, impact, and detectability of risks to prioritize them effectively.",
    categories: ["Risk Management"],
  },
  {
    id: 315,
    type: "multiple-choice",
    question:
      "Which procurement process involves inviting vendors to submit proposals?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of requesting proposals or bids from potential vendors for project needs.",
    categories: ["Procurement Management"],
  },
  {
    id: 316,
    type: "fill-in-the-blank",
    question:
      "A formal, legally binding agreement between a buyer and a vendor is called a ________.",
    answer: "Contract",
    explanation:
      "A Contract formalizes the terms and conditions of procurement and ensures both parties are bound to the agreement.",
    categories: ["Procurement Management"],
  },
  {
    id: 317,
    type: "multiple-choice",
    question: "Which tool is used to plan and schedule project communications?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Charter",
      "Activity List",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix outlines how and when project information will be shared with stakeholders.",
    categories: ["Communication Management"],
  },
  {
    id: 318,
    type: "fill-in-the-blank",
    question:
      "The process of distributing project information to all relevant stakeholders is called ________.",
    answer: "Information Distribution",
    explanation:
      "Information Distribution ensures that project updates and data reach all stakeholders in a timely manner.",
    categories: ["Communication Management"],
  },
  {
    id: 319,
    type: "multiple-choice",
    question:
      "Which process categorizes stakeholders based on their power and influence?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates and categorizes stakeholders, enabling tailored engagement strategies based on their influence.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 320,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices contribute to effective stakeholder engagement?",
    options: [
      "Regular progress updates",
      "Tailored communication strategies",
      "Excluding low-interest stakeholders",
      "Involving stakeholders in decision-making",
    ],
    answers: [
      "Regular progress updates",
      "Tailored communication strategies",
      "Involving stakeholders in decision-making",
    ],
    explanation:
      "Effective engagement is achieved by keeping stakeholders informed, tailoring communications, and actively involving them in project decisions.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 321,
    type: "multiple-choice",
    question:
      "Which document serves as the baseline for all project scope changes?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Work Breakdown Structure",
      "Change Log",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement provides a baseline that defines what is and isn’t included in the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 322,
    type: "fill-in-the-blank",
    question:
      "Breaking down project deliverables into manageable components is known as creating a ________.",
    answer: "Work Breakdown Structure",
    explanation:
      "A Work Breakdown Structure (WBS) decomposes project deliverables into smaller, manageable pieces.",
    categories: ["Project Scope Management"],
  },
  {
    id: 323,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices help in maintaining a well-controlled project scope?",
    options: [
      "Regular scope reviews",
      "Formal change control procedures",
      "Allowing informal changes",
      "Comprehensive documentation",
    ],
    answers: [
      "Regular scope reviews",
      "Formal change control procedures",
      "Comprehensive documentation",
    ],
    explanation:
      "Regular reviews, formal change controls, and thorough documentation prevent scope creep and keep the project aligned.",
    categories: ["Project Scope Management"],
  },
  {
    id: 324,
    type: "multiple-choice",
    question:
      "Which cost management process establishes the spending plan for the project?",
    options: [
      "Cost Estimation",
      "Cost Budgeting",
      "Cost Control",
      "Cost Forecasting",
    ],
    answer: "Cost Budgeting",
    explanation:
      "Cost Budgeting involves setting the spending limits and allocating funds across the project activities.",
    categories: ["Cost Management"],
  },
  {
    id: 325,
    type: "matching",
    question: "Match the cost management term with its definition.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting the project’s costs" },
      { left: "Cost Budgeting", right: "Allocating the overall spending plan" },
      { left: "Cost Control", right: "Monitoring and managing expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting the project’s costs",
      "Allocating the overall spending plan",
      "Monitoring and managing expenditures",
    ],
    explanation:
      "Each process has a distinct role in managing project finances.",
    categories: ["Cost Management"],
  },
  {
    id: 326,
    type: "fill-in-the-blank",
    question:
      "The documented cost baseline, used to compare actual performance, is known as the ________.",
    answer: "Cost Baseline",
    explanation:
      "The Cost Baseline is the approved version of the project budget, used for performance measurement.",
    categories: ["Cost Management"],
  },
  {
    id: 327,
    type: "multiple-choice",
    question:
      "Which scheduling technique is typically used to reduce the overall project duration by overlapping tasks?",
    options: [
      "Critical Path Method",
      "Fast Tracking",
      "Resource Smoothing",
      "Milestone Charting",
    ],
    answer: "Fast Tracking",
    explanation:
      "Fast Tracking involves overlapping tasks that were originally planned sequentially to shorten the schedule.",
    categories: ["Time Management"],
  },
  {
    id: 328,
    type: "fill-in-the-blank",
    question:
      "Adjusting the project schedule to accommodate resource availability is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling modifies the schedule based on available resources, avoiding over-allocation.",
    categories: ["Time Management"],
  },
  {
    id: 329,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are considered when developing a project schedule?",
    options: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
      "Quality metrics",
    ],
    answers: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
    ],
    explanation:
      "A project schedule is developed by considering the duration of tasks, their dependencies, and the resources available.",
    categories: ["Time Management"],
  },
  {
    id: 330,
    type: "multiple-choice",
    question:
      "Which process evaluates project processes to ensure they meet quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Assurance",
    explanation:
      "Quality Assurance is the process of auditing and evaluating processes to ensure compliance with quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 331,
    type: "matching",
    question:
      "Match the following quality improvement tools with their primary purpose.",
    pairs: [
      { left: "Six Sigma", right: "Reduce process variability" },
      { left: "PDCA Cycle", right: "Implement continuous improvement" },
      { left: "Root Cause Analysis", right: "Identify underlying problems" },
    ],
    leftOptions: ["Six Sigma", "PDCA Cycle", "Root Cause Analysis"],
    rightOptions: [
      "Reduce process variability",
      "Implement continuous improvement",
      "Identify underlying problems",
    ],
    explanation:
      "These tools are used to enhance quality by reducing defects and driving improvements.",
    categories: ["Quality Management"],
  },
  {
    id: 332,
    type: "fill-in-the-blank",
    question:
      "A data-driven methodology aimed at reducing process defects is known as ________.",
    answer: "Six Sigma",
    explanation:
      "Six Sigma employs statistical methods to reduce defects and improve quality.",
    categories: ["Quality Management"],
  },
  {
    id: 333,
    type: "multiple-choice",
    question:
      "Which process is responsible for defining and documenting potential project risks?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the first step in risk management, where potential risks are systematically documented.",
    categories: ["Risk Management"],
  },
  {
    id: 334,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are vital for proactive risk management?",
    options: [
      "Early risk detection",
      "Developing contingency plans",
      "Ignoring unlikely risks",
      "Continuous risk monitoring",
    ],
    answers: [
      "Early risk detection",
      "Developing contingency plans",
      "Continuous risk monitoring",
    ],
    explanation:
      "Proactive risk management involves detecting risks early, planning responses, and continuously monitoring the risk landscape.",
    categories: ["Risk Management"],
  },
  {
    id: 335,
    type: "multiple-choice",
    question:
      "Which process involves soliciting proposals from potential vendors?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of requesting proposals or bids from vendors to fulfill project requirements.",
    categories: ["Procurement Management"],
  },
  {
    id: 336,
    type: "fill-in-the-blank",
    question:
      "A document that formally requests bids or proposals from vendors is known as a ________.",
    answer: "Request for Proposal",
    explanation:
      "A Request for Proposal (RFP) outlines the project requirements and invites vendors to submit proposals.",
    categories: ["Procurement Management"],
  },
  {
    id: 337,
    type: "multiple-choice",
    question:
      "Which element of a communication plan outlines the methods and timing of information distribution?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Charter",
      "Activity Schedule",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix specifies how, when, and by what means project information is distributed to stakeholders.",
    categories: ["Communication Management"],
  },
  {
    id: 338,
    type: "matching",
    question: "Match each communication tool with its primary function.",
    pairs: [
      {
        left: "Email Updates",
        right: "Distribute regular project information",
      },
      { left: "Team Meetings", right: "Facilitate collaborative discussion" },
      { left: "Status Reports", right: "Provide project progress summaries" },
    ],
    leftOptions: ["Email Updates", "Team Meetings", "Status Reports"],
    rightOptions: [
      "Distribute regular project information",
      "Facilitate collaborative discussion",
      "Provide project progress summaries",
    ],
    explanation:
      "These tools ensure that project information is shared effectively and efficiently.",
    categories: ["Communication Management"],
  },
  {
    id: 339,
    type: "multiple-choice",
    question:
      "Which process helps identify and analyze the interests and influence of stakeholders?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates each stakeholder's power, interest, and influence, guiding appropriate engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 340,
    type: "fill-in-the-blank",
    question:
      "A document that records stakeholder information, including roles and influence, is known as the ________.",
    answer: "Stakeholder Register",
    explanation:
      "The Stakeholder Register is used to document and manage stakeholder details throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 341,
    type: "multiple-choice",
    question:
      "Which process ensures that the project scope is formally approved by all key stakeholders?",
    options: [
      "Scope Planning",
      "Scope Validation",
      "Scope Definition",
      "Change Control",
    ],
    answer: "Scope Validation",
    explanation:
      "Scope Validation is the process in which stakeholders review and formally accept the project deliverables and scope.",
    categories: ["Project Scope Management"],
  },
  {
    id: 342,
    type: "fill-in-the-blank",
    question:
      "The document that details all project deliverables and boundaries is known as the ________.",
    answer: "Scope Statement",
    explanation:
      "The Scope Statement clearly outlines what is included in—and excluded from—the project.",
    categories: ["Project Scope Management"],
  },
  {
    id: 343,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities are key to effective scope management?",
    options: [
      "Defining deliverables",
      "Managing change requests",
      "Reviewing the scope baseline",
      "Developing the project schedule",
    ],
    answers: [
      "Defining deliverables",
      "Managing change requests",
      "Reviewing the scope baseline",
    ],
    explanation:
      "Effective scope management includes clear definition of deliverables, formal handling of changes, and regular review of the scope baseline.",
    categories: ["Project Scope Management"],
  },
  {
    id: 344,
    type: "multiple-choice",
    question:
      "Which cost estimation method calculates the cost of the project by aggregating the costs of individual work packages?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Bottom-Up Estimating",
    explanation:
      "Bottom-Up Estimating involves estimating costs for each work package and summing them to arrive at a project total.",
    categories: ["Cost Management"],
  },
  {
    id: 345,
    type: "matching",
    question: "Match each cost estimation method with its characteristic.",
    pairs: [
      {
        left: "Analogous Estimating",
        right: "Uses historical data from similar projects",
      },
      {
        left: "Parametric Estimating",
        right: "Uses statistical relationships between variables",
      },
      {
        left: "Bottom-Up Estimating",
        right: "Aggregates individual work package estimates",
      },
    ],
    leftOptions: [
      "Analogous Estimating",
      "Parametric Estimating",
      "Bottom-Up Estimating",
    ],
    rightOptions: [
      "Uses historical data from similar projects",
      "Uses statistical relationships between variables",
      "Aggregates individual work package estimates",
    ],
    explanation:
      "Each cost estimation method has its own approach based on data availability and desired accuracy.",
    categories: ["Cost Management"],
  },
  {
    id: 346,
    type: "fill-in-the-blank",
    question:
      "The difference between the budgeted cost and the actual cost is known as ________.",
    answer: "Cost Variance",
    explanation:
      "Cost Variance is a measure of cost performance used to determine how much over or under budget the project is.",
    categories: ["Cost Management"],
  },
  {
    id: 347,
    type: "multiple-choice",
    question:
      "Which scheduling tool visually represents the start and finish dates of project activities?",
    options: [
      "Network Diagram",
      "Gantt Chart",
      "Milestone Chart",
      "PERT Chart",
    ],
    answer: "Gantt Chart",
    explanation:
      "A Gantt Chart is a bar chart that visually outlines project activities along a timeline.",
    categories: ["Time Management"],
  },
  {
    id: 348,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are critical when developing a project schedule?",
    options: [
      "Task durations",
      "Task dependencies",
      "Resource availability",
      "Quality control methods",
    ],
    answers: ["Task durations", "Task dependencies", "Resource availability"],
    explanation:
      "Project schedules depend on the estimated duration of tasks, their dependencies, and the availability of resources.",
    categories: ["Time Management"],
  },
  {
    id: 349,
    type: "fill-in-the-blank",
    question:
      "The process of reducing the project duration by adding extra resources is known as ________.",
    answer: "Crashing",
    explanation:
      "Crashing involves adding resources to critical tasks to shorten the overall project duration, often at an increased cost.",
    categories: ["Time Management"],
  },
  {
    id: 350,
    type: "multiple-choice",
    question:
      "Which process involves monitoring project deliverables to identify defects and ensure quality?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control focuses on inspecting deliverables to ensure they meet the predetermined quality standards.",
    categories: ["Quality Management"],
  },
  {
    id: 351,
    type: "matching",
    question: "Match each quality process with its primary objective.",
    pairs: [
      { left: "Quality Assurance", right: "Audit project processes" },
      { left: "Quality Control", right: "Detect defects in deliverables" },
      { left: "Quality Improvement", right: "Enhance project performance" },
    ],
    leftOptions: [
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    rightOptions: [
      "Audit project processes",
      "Detect defects in deliverables",
      "Enhance project performance",
    ],
    explanation:
      "Each quality process plays a different role, from auditing to defect detection and continuous enhancement.",
    categories: ["Quality Management"],
  },
  {
    id: 352,
    type: "fill-in-the-blank",
    question:
      "An ongoing effort to make incremental improvements to processes is known as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement focuses on gradual enhancements to processes and outcomes over time.",
    categories: ["Quality Management"],
  },
  {
    id: 353,
    type: "multiple-choice",
    question:
      "Which process is responsible for systematically identifying potential project risks?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the first step in risk management, where potential risks are listed for further analysis.",
    categories: ["Risk Management"],
  },
  {
    id: 354,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities are part of proactive risk management?",
    options: [
      "Early risk detection",
      "Developing contingency plans",
      "Ignoring low-impact risks",
      "Continuous risk monitoring",
    ],
    answers: [
      "Early risk detection",
      "Developing contingency plans",
      "Continuous risk monitoring",
    ],
    explanation:
      "Proactive risk management involves detecting risks early, planning responses, and continuously monitoring risks.",
    categories: ["Risk Management"],
  },
  {
    id: 355,
    type: "fill-in-the-blank",
    question:
      "A tool used to prioritize risks based on likelihood and impact is called a ________.",
    answer: "Risk Matrix",
    explanation:
      "A Risk Matrix visually displays risks to help prioritize them based on their probability and potential impact.",
    categories: ["Risk Management"],
  },
  {
    id: 356,
    type: "multiple-choice",
    question:
      "Which procurement process involves evaluating vendor proposals to select the most suitable vendor?",
    options: [
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
      "Procurement Planning",
    ],
    answer: "Vendor Evaluation",
    explanation:
      "Vendor Evaluation is the process of assessing proposals against criteria to select the best vendor.",
    categories: ["Procurement Management"],
  },
  {
    id: 357,
    type: "matching",
    question: "Match the procurement processes with their functions.",
    pairs: [
      { left: "Solicitation", right: "Requesting vendor proposals" },
      { left: "Vendor Evaluation", right: "Assessing vendor proposals" },
      {
        left: "Contract Administration",
        right: "Managing contract performance",
      },
    ],
    leftOptions: [
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    rightOptions: [
      "Requesting vendor proposals",
      "Assessing vendor proposals",
      "Managing contract performance",
    ],
    explanation:
      "These procurement processes work together to ensure that vendors are properly solicited, evaluated, and managed.",
    categories: ["Procurement Management"],
  },
  {
    id: 358,
    type: "fill-in-the-blank",
    question:
      "The process of obtaining goods and services from external sources is called ________.",
    answer: "Procurement",
    explanation:
      "Procurement involves acquiring goods or services from external vendors to fulfill project requirements.",
    categories: ["Procurement Management"],
  },
  {
    id: 359,
    type: "multiple-choice",
    question:
      "Which process ensures that project information is distributed in a timely manner to stakeholders?",
    options: [
      "Communication Planning",
      "Information Distribution",
      "Stakeholder Engagement",
      "Performance Reporting",
    ],
    answer: "Information Distribution",
    explanation:
      "Information Distribution focuses on delivering project information to stakeholders according to the communication plan.",
    categories: ["Communication Management"],
  },
  {
    id: 360,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are essential for effective stakeholder engagement?",
    options: [
      "Regular communication",
      "Tailored messaging",
      "Excluding low-interest stakeholders",
      "Active involvement in decision-making",
    ],
    answers: [
      "Regular communication",
      "Tailored messaging",
      "Active involvement in decision-making",
    ],
    explanation:
      "Effective stakeholder engagement is achieved through ongoing communication, customized messages, and involving stakeholders in key decisions.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 361,
    type: "multiple-choice",
    question:
      "Which process in scope management formalizes the acceptance of project deliverables?",
    options: [
      "Scope Planning",
      "Scope Definition",
      "Scope Validation",
      "Change Control",
    ],
    answer: "Scope Validation",
    explanation:
      "Scope Validation is the process where stakeholders review and formally accept project deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 362,
    type: "fill-in-the-blank",
    question:
      "Breaking down project deliverables into smaller components is achieved through a ________.",
    answer: "Work Breakdown Structure",
    explanation:
      "A Work Breakdown Structure (WBS) decomposes the project into smaller, more manageable parts.",
    categories: ["Project Scope Management"],
  },
  {
    id: 363,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices help maintain a clear project scope?",
    options: [
      "Regular scope reviews",
      "Formal change control procedures",
      "Informal team meetings",
      "Comprehensive documentation",
    ],
    answers: [
      "Regular scope reviews",
      "Formal change control procedures",
      "Comprehensive documentation",
    ],
    explanation:
      "Regular reviews, formal change controls, and thorough documentation help prevent scope creep.",
    categories: ["Project Scope Management"],
  },
  {
    id: 364,
    type: "multiple-choice",
    question:
      "Which cost estimation method is best suited for projects with high uncertainty?",
    options: [
      "Analogous Estimating",
      "Parametric Estimating",
      "Bottom-Up Estimating",
      "Three-Point Estimating",
    ],
    answer: "Three-Point Estimating",
    explanation:
      "Three-Point Estimating accounts for uncertainty by using optimistic, pessimistic, and most likely estimates.",
    categories: ["Cost Management"],
  },
  {
    id: 365,
    type: "matching",
    question: "Match each cost management term with its description.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting project expenses" },
      { left: "Cost Budgeting", right: "Setting the financial baseline" },
      { left: "Cost Control", right: "Monitoring and managing expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting project expenses",
      "Setting the financial baseline",
      "Monitoring and managing expenditures",
    ],
    explanation:
      "Each process plays a unique role in managing the project budget.",
    categories: ["Cost Management"],
  },
  {
    id: 366,
    type: "fill-in-the-blank",
    question:
      "Tracking project performance by comparing earned value to actual cost is a key element of ________.",
    answer: "Earned Value Management",
    explanation:
      "Earned Value Management (EVM) combines cost, schedule, and scope to measure performance.",
    categories: ["Cost Management"],
  },
  {
    id: 367,
    type: "multiple-choice",
    question:
      "Which scheduling technique identifies the longest sequence of dependent tasks to determine project duration?",
    options: [
      "Gantt Chart",
      "Critical Path Method",
      "Milestone Chart",
      "PERT Chart",
    ],
    answer: "Critical Path Method",
    explanation:
      "The Critical Path Method (CPM) pinpoints the sequence of tasks that directly influences the project’s overall duration.",
    categories: ["Time Management"],
  },
  {
    id: 368,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are critical when developing a project schedule?",
    options: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
      "Quality control metrics",
    ],
    answers: [
      "Activity durations",
      "Task dependencies",
      "Resource availability",
    ],
    explanation:
      "Effective scheduling considers task durations, dependencies, and resource constraints.",
    categories: ["Time Management"],
  },
  {
    id: 369,
    type: "fill-in-the-blank",
    question:
      "Rearranging tasks to balance resource utilization is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling adjusts the schedule based on resource availability to avoid over-allocation.",
    categories: ["Time Management"],
  },
  {
    id: 370,
    type: "multiple-choice",
    question:
      "Which process involves inspecting deliverables to ensure they meet quality standards?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Control",
    explanation:
      "Quality Control focuses on testing and inspecting deliverables to ensure they conform to quality requirements.",
    categories: ["Quality Management"],
  },
  {
    id: 371,
    type: "matching",
    question: "Match each quality metric with its definition.",
    pairs: [
      { left: "Defect Density", right: "Number of defects per unit" },
      {
        left: "Process Capability",
        right: "Ability of a process to produce output within specifications",
      },
      {
        left: "Customer Satisfaction",
        right: "Measure of how well deliverables meet stakeholder expectations",
      },
    ],
    leftOptions: [
      "Defect Density",
      "Process Capability",
      "Customer Satisfaction",
    ],
    rightOptions: [
      "Number of defects per unit",
      "Ability of a process to produce output within specifications",
      "Measure of how well deliverables meet stakeholder expectations",
    ],
    explanation:
      "These metrics quantify quality in terms of defects, process performance, and stakeholder satisfaction.",
    categories: ["Quality Management"],
  },
  {
    id: 372,
    type: "fill-in-the-blank",
    question:
      "An ongoing effort to enhance processes and products is referred to as ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement is a systematic approach to incrementally enhance processes over time.",
    categories: ["Quality Management"],
  },
  {
    id: 373,
    type: "multiple-choice",
    question:
      "Which process involves quantitatively assessing risk probabilities and impacts?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Analysis",
    explanation:
      "Risk Analysis quantitatively evaluates the likelihood and impact of risks to prioritize them.",
    categories: ["Risk Management"],
  },
  {
    id: 374,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are essential for robust risk management?",
    options: [
      "Early risk identification",
      "Developing contingency plans",
      "Ignoring minor risks",
      "Continuous risk monitoring",
    ],
    answers: [
      "Early risk identification",
      "Developing contingency plans",
      "Continuous risk monitoring",
    ],
    explanation:
      "Effective risk management requires early detection, proactive planning, and ongoing monitoring of risks.",
    categories: ["Risk Management"],
  },
  {
    id: 375,
    type: "multiple-choice",
    question:
      "Which procurement process involves requesting proposals from potential vendors?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of inviting vendors to submit proposals or bids for project requirements.",
    categories: ["Procurement Management"],
  },
  {
    id: 376,
    type: "fill-in-the-blank",
    question:
      "A legally binding agreement between a buyer and a vendor is known as a ________.",
    answer: "Contract",
    explanation:
      "A Contract formalizes the terms and conditions of procurement between the parties.",
    categories: ["Procurement Management"],
  },
  {
    id: 377,
    type: "multiple-choice",
    question:
      "Which component of a communication plan outlines the methods and frequency of information exchange?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Charter",
      "Activity Schedule",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix defines the channels, frequency, and methods for disseminating project information.",
    categories: ["Communication Management"],
  },
  {
    id: 378,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance effective project communication?",
    options: [
      "Regular status updates",
      "Clear and concise documentation",
      "Limiting communication channels",
      "Utilizing collaboration tools",
    ],
    answers: [
      "Regular status updates",
      "Clear and concise documentation",
      "Utilizing collaboration tools",
    ],
    explanation:
      "Effective communication is achieved through frequent updates, clarity in messaging, and modern collaboration platforms.",
    categories: ["Communication Management"],
  },
  {
    id: 379,
    type: "multiple-choice",
    question:
      "Which process categorizes stakeholders based on their power and influence?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis evaluates stakeholders' influence and interest, guiding tailored engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 380,
    type: "matching",
    question:
      "Match each stakeholder management activity with its intended purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "List all potential stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop strategies for effective involvement",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "List all potential stakeholders",
      "Develop strategies for effective involvement",
    ],
    explanation:
      "These activities ensure stakeholders are both identified and engaged effectively throughout the project.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 381,
    type: "multiple-choice",
    question:
      "Which process monitors project progress and identifies deviations from the scope baseline?",
    options: [
      "Scope Definition",
      "Scope Monitoring",
      "Scope Validation",
      "Change Control",
    ],
    answer: "Scope Monitoring",
    explanation:
      "Scope Monitoring tracks project performance against the scope baseline to detect any deviations.",
    categories: ["Project Scope Management"],
  },
  {
    id: 382,
    type: "fill-in-the-blank",
    question:
      "The process of reviewing and merging approved changes into the project scope is known as ________.",
    answer: "Integrated Change Control",
    explanation:
      "Integrated Change Control ensures that changes are systematically reviewed and merged into the project scope.",
    categories: ["Project Scope Management"],
  },
  {
    id: 383,
    type: "multiple-response",
    question:
      "Select all that apply: Which elements are essential when defining the project scope?",
    options: ["Deliverables", "Inclusions", "Exclusions", "Budget"],
    answers: ["Deliverables", "Inclusions", "Exclusions"],
    explanation:
      "Defining scope requires specifying what deliverables will be produced, what is included, and what is excluded.",
    categories: ["Project Scope Management"],
  },
  {
    id: 384,
    type: "multiple-choice",
    question:
      "Which cost management process forecasts future spending based on current trends?",
    options: [
      "Cost Estimation",
      "Cost Forecasting",
      "Cost Control",
      "Cost Budgeting",
    ],
    answer: "Cost Forecasting",
    explanation:
      "Cost Forecasting estimates future project costs by analyzing current performance trends.",
    categories: ["Cost Management"],
  },
  {
    id: 385,
    type: "fill-in-the-blank",
    question:
      "The approved version of the project budget, used as a performance baseline, is called the ________.",
    answer: "Cost Baseline",
    explanation:
      "The Cost Baseline is the approved budget against which actual spending is measured.",
    categories: ["Cost Management"],
  },
  {
    id: 386,
    type: "matching",
    question: "Match each cost control tool with its purpose.",
    pairs: [
      {
        left: "Variance Analysis",
        right: "Identify differences between planned and actual costs",
      },
      {
        left: "Earned Value Management",
        right: "Integrate scope, cost, and schedule performance",
      },
      { left: "Trend Analysis", right: "Forecast future cost performance" },
    ],
    leftOptions: [
      "Variance Analysis",
      "Earned Value Management",
      "Trend Analysis",
    ],
    rightOptions: [
      "Identify differences between planned and actual costs",
      "Integrate scope, cost, and schedule performance",
      "Forecast future cost performance",
    ],
    explanation:
      "Each tool serves to monitor and forecast cost performance throughout the project.",
    categories: ["Cost Management"],
  },
  {
    id: 387,
    type: "multiple-choice",
    question:
      "Which scheduling technique uses probability distributions to estimate project duration?",
    options: [
      "PERT Analysis",
      "Critical Path Method",
      "Gantt Chart",
      "Milestone Chart",
    ],
    answer: "PERT Analysis",
    explanation:
      "PERT Analysis uses three estimates (optimistic, most likely, and pessimistic) to compute a weighted average duration.",
    categories: ["Time Management"],
  },
  {
    id: 388,
    type: "fill-in-the-blank",
    question:
      "A bar chart that visually represents the project schedule is known as a ________.",
    answer: "Gantt Chart",
    explanation:
      "Gantt Charts display tasks along a timeline, showing start and finish dates.",
    categories: ["Time Management"],
  },
  {
    id: 389,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are considered when sequencing project activities?",
    options: [
      "Task dependencies",
      "Resource availability",
      "Activity durations",
      "Quality metrics",
    ],
    answers: [
      "Task dependencies",
      "Resource availability",
      "Activity durations",
    ],
    explanation:
      "Sequencing requires considering dependencies, available resources, and estimated task durations.",
    categories: ["Time Management"],
  },
  {
    id: 390,
    type: "multiple-choice",
    question:
      "Which quality process involves establishing quality standards and metrics for deliverables?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Planning",
    explanation:
      "Quality Planning defines the quality standards and metrics that deliverables must meet.",
    categories: ["Quality Management"],
  },
  {
    id: 391,
    type: "fill-in-the-blank",
    question:
      "A tool used to monitor process performance and variability over time is known as a ________.",
    answer: "Control Chart",
    explanation:
      "Control Charts are used to track process performance and detect any significant variations.",
    categories: ["Quality Management"],
  },
  {
    id: 392,
    type: "matching",
    question: "Match each quality metric with its description.",
    pairs: [
      { left: "Defect Density", right: "Number of defects per unit of output" },
      {
        left: "Process Capability",
        right:
          "Ability of a process to produce outputs within specification limits",
      },
      {
        left: "Customer Satisfaction",
        right: "Measure of stakeholder satisfaction with deliverables",
      },
    ],
    leftOptions: [
      "Defect Density",
      "Process Capability",
      "Customer Satisfaction",
    ],
    rightOptions: [
      "Number of defects per unit of output",
      "Ability of a process to produce outputs within specification limits",
      "Measure of stakeholder satisfaction with deliverables",
    ],
    explanation:
      "These metrics help quantify quality in terms of defects, process performance, and stakeholder satisfaction.",
    categories: ["Quality Management"],
  },
  {
    id: 393,
    type: "multiple-choice",
    question:
      "Which process prioritizes risks based on their probability and impact?",
    options: [
      "Risk Identification",
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Risk Response Planning",
    ],
    answer: "Qualitative Risk Analysis",
    explanation:
      "Qualitative Risk Analysis ranks risks by assessing their probability and potential impact on the project.",
    categories: ["Risk Management"],
  },
  {
    id: 394,
    type: "fill-in-the-blank",
    question:
      "A centralized document that records all identified risks, their analysis, and response plans is called the ________.",
    answer: "Risk Register",
    explanation:
      "The Risk Register is used to track risks, including their probability, impact, and planned responses.",
    categories: ["Risk Management"],
  },
  {
    id: 395,
    type: "multiple-response",
    question:
      "Select all that apply: Which techniques are used to mitigate risks?",
    options: [
      "Risk Avoidance",
      "Risk Mitigation",
      "Risk Transference",
      "Risk Exploitation",
    ],
    answers: ["Risk Avoidance", "Risk Mitigation", "Risk Transference"],
    explanation:
      "Risk mitigation strategies for negative risks typically include avoidance, mitigation, and transference.",
    categories: ["Risk Management"],
  },
  {
    id: 396,
    type: "multiple-choice",
    question:
      "Which procurement process involves inviting vendors to submit proposals?",
    options: [
      "Procurement Planning",
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
    ],
    answer: "Solicitation",
    explanation:
      "Solicitation is the process of requesting bids or proposals from potential vendors.",
    categories: ["Procurement Management"],
  },
  {
    id: 397,
    type: "fill-in-the-blank",
    question:
      "A document that outlines the detailed requirements for a product or service is known as the ________.",
    answer: "Procurement Statement of Work",
    explanation:
      "The Procurement Statement of Work (SOW) details the scope and requirements for the procurement of goods or services.",
    categories: ["Procurement Management"],
  },
  {
    id: 398,
    type: "multiple-choice",
    question:
      "Which process manages vendor relationships and ensures compliance with contractual terms?",
    options: [
      "Vendor Evaluation",
      "Contract Administration",
      "Solicitation",
      "Procurement Planning",
    ],
    answer: "Contract Administration",
    explanation:
      "Contract Administration involves managing vendor performance and ensuring that contractual obligations are met.",
    categories: ["Procurement Management"],
  },
  {
    id: 399,
    type: "multiple-choice",
    question:
      "Which element of a communication plan defines the frequency and format of project updates?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Charter",
      "Meeting Schedule",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix outlines the methods, frequency, and formats for communicating project information.",
    categories: ["Communication Management"],
  },
  {
    id: 400,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are essential when developing a communication strategy?",
    options: [
      "Understanding stakeholder needs",
      "Defining clear messaging",
      "Choosing appropriate communication channels",
      "Increasing project costs",
    ],
    answers: [
      "Understanding stakeholder needs",
      "Defining clear messaging",
      "Choosing appropriate communication channels",
    ],
    explanation:
      "A robust communication strategy considers stakeholder needs, clear messaging, and the right channels for effective information dissemination.",
    categories: ["Communication Management"],
  },
  {
    id: 401,
    type: "multiple-choice",
    question:
      "Which document is used to formally define and approve project deliverables?",
    options: [
      "Project Charter",
      "Scope Statement",
      "Change Log",
      "Risk Register",
    ],
    answer: "Scope Statement",
    explanation:
      "The Scope Statement formally defines what is and isn’t included in the project deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 402,
    type: "fill-in-the-blank",
    question:
      "The process of reviewing completed deliverables for formal acceptance is called ________.",
    answer: "Scope Validation",
    explanation:
      "Scope Validation involves getting formal acceptance from stakeholders on the completed deliverables.",
    categories: ["Project Scope Management"],
  },
  {
    id: 403,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices are essential to control project scope?",
    options: [
      "Implementing change control procedures",
      "Maintaining detailed documentation",
      "Conducting regular scope reviews",
      "Increasing project budget",
    ],
    answers: [
      "Implementing change control procedures",
      "Maintaining detailed documentation",
      "Conducting regular scope reviews",
    ],
    explanation:
      "Effective scope control requires formal change control, comprehensive documentation, and regular reviews.",
    categories: ["Project Scope Management"],
  },
  {
    id: 404,
    type: "multiple-choice",
    question:
      "Which cost estimation method involves breaking the project into individual components and summing their costs?",
    options: [
      "Analogous Estimating",
      "Bottom-Up Estimating",
      "Parametric Estimating",
      "Three-Point Estimating",
    ],
    answer: "Bottom-Up Estimating",
    explanation:
      "Bottom-Up Estimating calculates costs by estimating each component individually and aggregating the totals.",
    categories: ["Cost Management"],
  },
  {
    id: 405,
    type: "matching",
    question: "Match each cost management process with its objective.",
    pairs: [
      { left: "Cost Estimation", right: "Forecasting project expenses" },
      { left: "Cost Budgeting", right: "Setting the financial baseline" },
      { left: "Cost Control", right: "Monitoring and adjusting expenditures" },
    ],
    leftOptions: ["Cost Estimation", "Cost Budgeting", "Cost Control"],
    rightOptions: [
      "Forecasting project expenses",
      "Setting the financial baseline",
      "Monitoring and adjusting expenditures",
    ],
    explanation:
      "Each process plays a vital role in managing project finances from forecasting to control.",
    categories: ["Cost Management"],
  },
  {
    id: 406,
    type: "fill-in-the-blank",
    question:
      "The process of monitoring actual spending against the planned budget is known as ________.",
    answer: "Cost Control",
    explanation:
      "Cost Control is used to compare planned spending to actual expenditures and take corrective actions if necessary.",
    categories: ["Cost Management"],
  },
  {
    id: 407,
    type: "multiple-choice",
    question: "Which scheduling tool displays project tasks along a timeline?",
    options: [
      "Gantt Chart",
      "Network Diagram",
      "Milestone Chart",
      "Resource Histogram",
    ],
    answer: "Gantt Chart",
    explanation:
      "A Gantt Chart visually represents project tasks on a timeline, showing start and finish dates.",
    categories: ["Time Management"],
  },
  {
    id: 408,
    type: "multiple-response",
    question:
      "Select all that apply: Which factors are considered when creating a project schedule?",
    options: [
      "Task durations",
      "Dependencies",
      "Resource availability",
      "Quality standards",
    ],
    answers: ["Task durations", "Dependencies", "Resource availability"],
    explanation:
      "Project schedules are developed by estimating task durations, mapping dependencies, and considering available resources.",
    categories: ["Time Management"],
  },
  {
    id: 409,
    type: "fill-in-the-blank",
    question:
      "The technique of adjusting the project schedule based on resource constraints is known as ________.",
    answer: "Resource Leveling",
    explanation:
      "Resource Leveling rebalances the schedule to match resource availability and avoid overallocation.",
    categories: ["Time Management"],
  },
  {
    id: 410,
    type: "multiple-choice",
    question:
      "Which process is responsible for setting quality objectives and standards for a project?",
    options: [
      "Quality Planning",
      "Quality Assurance",
      "Quality Control",
      "Quality Improvement",
    ],
    answer: "Quality Planning",
    explanation:
      "Quality Planning involves determining quality standards and setting objectives that deliverables must meet.",
    categories: ["Quality Management"],
  },
  {
    id: 411,
    type: "matching",
    question: "Match each quality tool with its primary purpose.",
    pairs: [
      { left: "Pareto Chart", right: "Prioritize major quality issues" },
      { left: "Fishbone Diagram", right: "Identify root causes" },
      { left: "Control Chart", right: "Monitor process stability" },
    ],
    leftOptions: ["Pareto Chart", "Fishbone Diagram", "Control Chart"],
    rightOptions: [
      "Prioritize major quality issues",
      "Identify root causes",
      "Monitor process stability",
    ],
    explanation:
      "These tools are used to analyze quality problems and ensure processes remain stable.",
    categories: ["Quality Management"],
  },
  {
    id: 412,
    type: "fill-in-the-blank",
    question:
      "The methodical process of making ongoing improvements to project processes is called ________.",
    answer: "Continuous Improvement",
    explanation:
      "Continuous Improvement is a systematic, ongoing effort to improve project processes and outcomes.",
    categories: ["Quality Management"],
  },
  {
    id: 413,
    type: "multiple-choice",
    question: "Which process is the first step in the risk management cycle?",
    options: [
      "Risk Identification",
      "Risk Analysis",
      "Risk Response Planning",
      "Risk Monitoring",
    ],
    answer: "Risk Identification",
    explanation:
      "Risk Identification is the initial process that involves listing potential risks that might impact the project.",
    categories: ["Risk Management"],
  },
  {
    id: 414,
    type: "multiple-response",
    question:
      "Select all that apply: Which activities are critical for effective risk management?",
    options: [
      "Early risk detection",
      "Developing contingency plans",
      "Ignoring low-impact risks",
      "Ongoing risk monitoring",
    ],
    answers: [
      "Early risk detection",
      "Developing contingency plans",
      "Ongoing risk monitoring",
    ],
    explanation:
      "Effective risk management includes early detection, contingency planning, and continuous monitoring.",
    categories: ["Risk Management"],
  },
  {
    id: 415,
    type: "multiple-choice",
    question:
      "Which procurement process involves evaluating vendor proposals to select the best option?",
    options: [
      "Solicitation",
      "Vendor Evaluation",
      "Contract Administration",
      "Procurement Planning",
    ],
    answer: "Vendor Evaluation",
    explanation:
      "Vendor Evaluation is the process of comparing vendor proposals against established criteria to select the most suitable vendor.",
    categories: ["Procurement Management"],
  },
  {
    id: 416,
    type: "fill-in-the-blank",
    question:
      "A formal document that outlines the terms and conditions of procurement is known as a ________.",
    answer: "Contract",
    explanation:
      "A Contract legally binds the buyer and vendor to agreed terms and conditions.",
    categories: ["Procurement Management"],
  },
  {
    id: 417,
    type: "multiple-choice",
    question:
      "Which element of a communication plan specifies how project information will be shared?",
    options: [
      "Communication Matrix",
      "Stakeholder Register",
      "Project Charter",
      "Meeting Agenda",
    ],
    answer: "Communication Matrix",
    explanation:
      "The Communication Matrix details the methods, frequency, and channels for disseminating project information.",
    categories: ["Communication Management"],
  },
  {
    id: 418,
    type: "multiple-response",
    question:
      "Select all that apply: Which practices enhance project communication?",
    options: [
      "Regular progress meetings",
      "Clear documentation",
      "One-way communication",
      "Use of collaborative tools",
    ],
    answers: [
      "Regular progress meetings",
      "Clear documentation",
      "Use of collaborative tools",
    ],
    explanation:
      "Effective communication is achieved through regular meetings, clear and concise documentation, and collaboration tools.",
    categories: ["Communication Management"],
  },
  {
    id: 419,
    type: "multiple-choice",
    question:
      "Which process helps analyze stakeholder interests to guide engagement strategies?",
    options: [
      "Stakeholder Identification",
      "Stakeholder Analysis",
      "Stakeholder Engagement",
      "Stakeholder Communication",
    ],
    answer: "Stakeholder Analysis",
    explanation:
      "Stakeholder Analysis assesses the influence and interest of stakeholders to help tailor engagement strategies.",
    categories: ["Stakeholder Management"],
  },
  {
    id: 420,
    type: "matching",
    question: "Match each stakeholder management activity with its purpose.",
    pairs: [
      {
        left: "Stakeholder Identification",
        right: "List and classify stakeholders",
      },
      {
        left: "Stakeholder Engagement",
        right: "Develop methods to involve stakeholders",
      },
    ],
    leftOptions: ["Stakeholder Identification", "Stakeholder Engagement"],
    rightOptions: [
      "List and classify stakeholders",
      "Develop methods to involve stakeholders",
    ],
    explanation:
      "These activities ensure that stakeholders are identified and effectively engaged throughout the project lifecycle.",
    categories: ["Stakeholder Management"],
  },
];

module.exports = { oldQuestions };