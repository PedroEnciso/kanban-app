const data = {
  boards: [
    {
      id: "b1",
      name: "Platform Launch",
      columns: [
        {
          id: "b1c1",
          name: "Todo",
          tasks: [
            {
              id: "b1c1t1",
              title: "Build UI for onboarding flow",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "b1c1t1s1",
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  id: "b1c1t1s2",
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  id: "b1c1t1s3",
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t2",
              title: "Build UI for search",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "b1c1t2s1",
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t3",
              title: "Build settings UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "b1c1t3s1",
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  id: "b1c1t3s2",
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t4",
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  id: "b1c1t4s1",
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  id: "b1c1t4s2",
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: "b1c2",
          name: "Doing",
          tasks: [
            {
              id: "b1c2t1",
              title: "Design settings and search pages",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t1s1",
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  id: "b1c2t1s2",
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  id: "b1c2t1s3",
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c2t2",
              title: "Add account management endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t2s1",
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  id: "b1c2t2s2",
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  id: "b1c2t2s13",
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c2t3",
              title: "Design onboarding flow",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t3s1",
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  id: "b1c2t3s2",
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  id: "b1c2t3s3",
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c2t4",
              title: "Add search enpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t4s1",
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  id: "b1c2t4s2",
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c2t5",
              title: "Add authentication endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t5s1",
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  id: "b1c2t5s2",
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c2t6",
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  id: "b1c2t6s1",
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  id: "b1c2t6s2",
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  id: "b1c2t6s3",
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: "b1c3",
          name: "Done",
          tasks: [
            {
              id: "b1c3t1",
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t1s1",
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t2",
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t2s1",
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t3",
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t3s1",
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  id: "b1c3t3s2",
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  id: "b1c3t3s3",
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t4",
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t4s1",
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  id: "b1c3t4s2",
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t5",
              title: "Market discovery",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t5s1",
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t6",
              title: "Competitor analysis",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t6s1",
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  id: "b1c3t6s2",
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "b1c3t7",
              title: "Research the market",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "Done",
              subtasks: [
                {
                  id: "b1c3t7s1",
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  id: "b1c3t7s2",
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "b2",
      name: "Marketing Plan",
      columns: [
        {
          id: "b2c1",
          name: "Todo",
          tasks: [
            {
              id: "b2c1t1",
              title: "Plan Product Hunt launch",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "b2c1t1s1",
                  title: "Find hunter",
                  isCompleted: false,
                },
                {
                  id: "b2c1t1s2",
                  title: "Gather assets",
                  isCompleted: false,
                },
                {
                  id: "b2c1t1s3",
                  title: "Draft product page",
                  isCompleted: false,
                },
                {
                  id: "b2c1t1s4",
                  title: "Notify customers",
                  isCompleted: false,
                },
                {
                  id: "b2c1t1s5",
                  title: "Notify network",
                  isCompleted: false,
                },
                {
                  id: "b2c1t1s6",
                  title: "Launch!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b2c1t2",
              title: "Share on Show HN",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "b2c1t2s1",
                  title: "Draft out HN post",
                  isCompleted: false,
                },
                {
                  id: "b2c1t2s2",
                  title: "Get feedback and refine",
                  isCompleted: false,
                },
                {
                  id: "b2c1t2s3",
                  title: "Publish post",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b2c1t3",
              title: "Write launch article to publish on multiple channels",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "b2c1t3s1",
                  title: "Write article",
                  isCompleted: false,
                },
                {
                  id: "b2c1t3s2",
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                },
                {
                  id: "b2c1t3s3",
                  title: "Publish on Inndie Hackers",
                  isCompleted: false,
                },
                {
                  id: "b2c1t3s4",
                  title: "Publish on Medium",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: "b2c2",
          name: "Doing",
          tasks: [],
        },
        {
          id: "b2c3",
          name: "Done",
          tasks: [],
        },
      ],
    },
    {
      id: "b3",
      name: "Roadmap",
      columns: [
        {
          id: "b3c1",
          name: "Now",
          tasks: [
            {
              id: "b3c1t1",
              title: "Launch version one",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "b3c1t1s1",
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                },
                {
                  id: "b3c1t1s2",
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b3c1t2",
              title: "Review early feedback and plan next steps for roadmap",
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: "",
              subtasks: [
                {
                  id: "b3c1t2s1",
                  title: "Interview 10 customers",
                  isCompleted: false,
                },
                {
                  id: "b3c1t2s2",
                  title: "Review common customer pain points and suggestions",
                  isCompleted: false,
                },
                {
                  id: "b3c1t2s3",
                  title: "Outline next steps for our roadmap",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: "b3c2",
          name: "Next",
          tasks: [],
        },
        {
          id: "b3c3",
          name: "Later",
          tasks: [],
        },
      ],
    },
  ],
};

export default data;
