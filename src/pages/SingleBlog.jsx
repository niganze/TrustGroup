import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import profile from '../assets/images/Byiringiro.jpeg';
import Future from '../assets/images/Building Communities.jpeg';
import Consider from '../assets/images/Urban Spaces.jpeg';
import Construction from '../assets/images/Project Management.jpeg';
import Developments from '../assets/images/Busanza.jpeg';
import Building from '../assets/images/Building.jpeg';
import Optimizing from '../assets/images/Trusty Construction.jpeg';
import Estate from '../assets/images/Estate.jpeg';
import Trusty from '../assets/images/construction.jpg';

function SingleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('article');

  // Sample blog posts data
  const blogPosts = [
      {
        id: 1,
        title: "The Future of Sustainable Construction in East Africa",
        excerpt: "Exploring innovative building techniques and materials that are shaping the future of sustainable construction across East Africa.",
        content: `
          <p>The construction industry in East Africa is undergoing a significant transformation, with sustainability at its core. As climate change concerns grow and resources become scarcer, developers and construction companies are increasingly turning to innovative methods and materials to create more environmentally friendly buildings.</p>
          
          <h2>Innovative Materials Transforming Construction</h2>
          <p>One of the most exciting developments in East African construction is the adoption of alternative building materials. Traditional concrete and steel, while durable, have high carbon footprints. In response, companies like Trusty Group are exploring materials such as bamboo-reinforced concrete, compressed earth blocks, and recycled materials.</p>
          
          <p>Bamboo-reinforced concrete offers similar strength to traditional reinforced concrete but with a significantly lower environmental impact. Compressed earth blocks utilize local soil mixed with a small amount of cement, reducing transportation costs and emissions while providing excellent thermal mass properties that help regulate indoor temperatures naturally.</p>
          
          <h2>Sustainable Building Practices</h2>
          <p>Beyond materials, construction practices themselves are evolving. Green building certifications like LEED and EDGE are gaining popularity across East Africa, encouraging developers to consider environmental impact throughout the building lifecycle.</p>
          
          <p>Water conservation is another critical area of focus. Rainwater harvesting systems, greywater recycling, and drought-resistant landscaping are becoming standard features in new constructions. These systems not only reduce water consumption but also help buildings remain functional during water shortages.</p>
          
          <h2>Renewable Energy Integration</h2>
          <p>Perhaps the most visible aspect of sustainable construction is the integration of renewable energy systems. Solar panels are becoming increasingly common on rooftops across East Africa, taking advantage of the region's abundant sunshine. Some forward-thinking developments are even incorporating building-integrated photovoltaics, where solar cells are built directly into building materials.</p>
          
          <p>Energy-efficient design is also crucial. Simple considerations like building orientation, natural ventilation, and proper insulation can dramatically reduce energy consumption. Smart building technologies that optimize energy use based on occupancy and weather conditions represent the next frontier in sustainable construction.</p>
          
          <h2>The Economic Case for Sustainability</h2>
          <p>While the environmental benefits of sustainable construction are clear, the economic advantages are equally compelling. Though initial costs may be higher, sustainable buildings typically have lower operating costs, higher occupancy rates, and better resale values.</p>
          
          <p>As governments across East Africa implement more stringent environmental regulations, early adopters of sustainable practices will have a competitive advantage. Additionally, international funding for green projects is becoming more readily available, making sustainable construction financially viable even in developing markets.</p>
          
          <h2>Looking Ahead</h2>
          <p>The future of construction in East Africa is undoubtedly green. As technology advances and awareness grows, we can expect to see even more innovative approaches to sustainable building. From 3D-printed structures that minimize waste to biomimicry-inspired designs that work in harmony with nature, the possibilities are endless.</p>
          
          <p>At Trusty Group, we're committed to leading this transformation, creating buildings that not only serve their occupants but also protect and preserve the environment for future generations.</p>
        `,
        category: "insights",
        tags: ["construction", "sustainability", "innovation"],
        author: "Frederic Byiringiro",
        authorRole: "CEO & Chief Product Architect",
        authorImage: profile,
        publishDate: "February 15, 2025",
        readTime: "8 min read",
        image: Future,
        featured: true
      },
      {
        id: 2,
        title: "5 Key Factors to Consider Before Investing in Real Estate",
        excerpt: "A comprehensive guide to the most important factors that every investor should consider before venturing into the real estate market.",
        content: `
          <p>Investing in real estate can be a lucrative venture, but it's not without its challenges and complexities. Whether you're a first-time investor or looking to expand your portfolio, understanding the key factors that influence real estate investments is crucial for success.</p>
          
          <h2>1. Location Analysis</h2>
          <p>The adage "location, location, location" remains true in real estate investing. A property's location significantly impacts its value, rental potential, and appreciation prospects. When evaluating a location, consider:</p>
          <ul>
            <li>Proximity to amenities (schools, hospitals, shopping centers)</li>
            <li>Transportation infrastructure and accessibility</li>
            <li>Employment opportunities in the area</li>
            <li>Crime rates and safety considerations</li>
            <li>Future development plans for the neighborhood</li>
          </ul>
          <p>In East Africa, rapidly developing areas with infrastructure improvements often offer the best investment opportunities, though they may come with higher initial costs.</p>
          
          <h2>2. Market Trends and Timing</h2>
          <p>Understanding market cycles is essential for making informed investment decisions. Research historical price trends, current market conditions, and future projections. Key indicators to monitor include:</p>
          <ul>
            <li>Property price trends over time</li>
            <li>Average time on market for properties</li>
            <li>Rental yield percentages</li>
            <li>Supply and demand dynamics</li>
            <li>Macroeconomic factors (interest rates, inflation, GDP growth)</li>
          </ul>
          <p>While timing the market perfectly is challenging, being aware of where the market stands in its cycle can help you make more strategic investment decisions.</p>
          
          <h2>3. Financial Considerations</h2>
          <p>Before investing, conduct a thorough financial analysis to ensure the investment aligns with your goals. Consider:</p>
          <ul>
            <li>Purchase price and associated costs (taxes, fees, renovations)</li>
            <li>Financing options and interest rates</li>
            <li>Projected rental income and expenses</li>
            <li>Cash flow analysis and cap rate</li>
            <li>Return on investment (ROI) projections</li>
            <li>Exit strategy and liquidity considerations</li>
          </ul>
          <p>A prudent approach is to calculate both best-case and worst-case scenarios to prepare for various market conditions.</p>
          
          <h2>4. Legal and Regulatory Framework</h2>
          <p>Real estate investing is subject to various laws and regulations that vary by location. Familiarize yourself with:</p>
          <ul>
            <li>Property ownership laws and restrictions</li>
            <li>Zoning regulations and land use policies</li>
            <li>Tenant rights and landlord obligations</li>
            <li>Tax implications and potential benefits</li>
            <li>Environmental regulations and compliance requirements</li>
          </ul>
          <p>Working with legal professionals who specialize in real estate can help navigate these complexities and avoid costly mistakes.</p>
          
          <h2>5. Property Management Considerations</h2>
          <p>The success of a real estate investment often depends on effective property management. Decide whether you'll manage the property yourself or hire professional management. Consider:</p>
          <ul>
            <li>Time commitment required for self-management</li>
            <li>Costs associated with professional management (typically 8-12% of rental income)</li>
            <li>Maintenance and repair responsibilities</li>
            <li>Tenant screening and management processes</li>
            <li>Emergency response capabilities</li>
          </ul>
          <p>For investors with multiple properties or those living far from their investments, professional management may be worth the cost despite reducing overall returns.</p>
          
          <h2>Conclusion</h2>
          <p>Real estate investing can provide stable income, appreciation potential, and portfolio diversification. However, success requires careful consideration of these five key factors. By conducting thorough research and due diligence, investors can make informed decisions that align with their financial goals and risk tolerance.</p>
          
          <p>At Trusty Group, we're committed to helping investors navigate the complexities of real estate markets across East Africa. Our team of professionals can provide insights and guidance tailored to your specific investment objectives.</p>
        `,
        category: "tips",
        tags: ["realestate", "investment", "guide"],
        author: "Providence Mukakarama",
        authorRole: "Chief Finance Officer",
        authorImage: profile,
        publishDate: "January 28, 2025",
        readTime: "6 min read",
        image: Consider,
        featured: true
      },
      {
        id: 3,
        title: "Trusty Construction Completes Busanza Apartments Project",
        excerpt: "Celebrating the successful completion of the Busanza Apartments project, featuring 84 modern dwelling units across six building blocks.",
        content: `
          <p>Trusty Construction, a subsidiary of Trusty Group, is proud to announce the successful completion of the Busanza Apartments project. This landmark development represents a significant milestone in our commitment to providing high-quality, affordable housing solutions in Rwanda.</p>
          
          <h2>Project Overview</h2>
          <p>The Busanza Apartments development consists of 84 modern dwelling units distributed across six building blocks. Located in the rapidly developing Busanza sector of Kicukiro District, the project aims to address the growing demand for quality housing in Kigali's expanding urban areas.</p>
          
          <p>Key features of the development include:</p>
          <ul>
            <li>A mix of one, two, and three-bedroom apartments</li>
            <li>Modern architectural design with emphasis on space optimization</li>
            <li>Energy-efficient building systems including solar water heating</li>
            <li>Landscaped common areas and recreational spaces</li>
            <li>Secure parking facilities and 24/7 security</li>
            <li>Reliable water supply systems with backup options</li>
          </ul>
          
          <h2>Construction Achievements</h2>
          <p>The project, which began in March 2023, was completed on schedule and within budget, despite challenges posed by supply chain disruptions and material cost fluctuations. This achievement underscores Trusty Construction's effective project management capabilities and commitment to delivery excellence.</p>
          
          <p>Throughout the construction process, we prioritized:</p>
          <ul>
            <li>Quality control and adherence to international building standards</li>
            <li>Safety protocols resulting in zero major incidents</li>
            <li>Environmental considerations including waste reduction and recycling</li>
            <li>Local community engagement and employment opportunities</li>
          </ul>
          
          <h2>Economic Impact</h2>
          <p>The Busanza Apartments project has made a significant economic contribution to the local community. During the construction phase, the project created over 350 direct jobs and approximately 500 indirect employment opportunities. Additionally, we prioritized local sourcing of materials where possible, supporting businesses within Rwanda and the East African region.</p>
          
          <p>The completed development is expected to house approximately 300 residents, contributing to the vibrancy and economic activity of the Busanza area.</p>
          
          <h2>Community Development</h2>
          <p>Beyond the physical structures, Trusty Construction has implemented several community development initiatives as part of this project. These include:</p>
          <ul>
            <li>Skills training programs for local construction workers</li>
            <li>Improvements to local infrastructure including road access</li>
            <li>Installation of community water points</li>
            <li>Support for local schools through educational materials and facility improvements</li>
          </ul>
          
          <h2>Looking Forward</h2>
          <p>The completion of the Busanza Apartments project marks another step in Trusty Group's mission to transform urban living in Rwanda. We are already planning several new developments that will build on the success and lessons learned from this project.</p>
          
          <p>"We are immensely proud of what we've accomplished with the Busanza Apartments," said Frederic Byiringiro, CEO of Trusty Group. "This project demonstrates our ability to deliver high-quality housing solutions that meet the needs of Rwanda's growing urban population while contributing positively to local communities."</p>
          
          <p>Trusty Construction extends its gratitude to all stakeholders, including government authorities, financial partners, suppliers, contractors, and the local community, whose support and collaboration were instrumental in the successful completion of this project.</p>
        `,
        category: "news",
        tags: ["construction", "projects", "completion"],
        author: "Clemence Nyiransabimana",
        authorRole: "Project Lead Designer",
        authorImage: profile,
        publishDate: "January 10, 2025",
        readTime: "4 min read",
        image: Construction,
        featured: false
      },
      {
        id: 4,
        title: "How Mixed-Use Developments Are Transforming Urban Spaces",
        excerpt: "An examination of how mixed-use developments are creating more vibrant, walkable, and sustainable urban communities.",
        content: `
          <p>The concept of mixed-use development is revolutionizing urban planning across East Africa. By combining residential, commercial, cultural, and sometimes industrial spaces within a single development, cities are creating more vibrant, efficient, and sustainable communities.</p>
          
          <h2>The Evolution of Urban Planning</h2>
          <p>Historically, urban planning often involved strict zoning that separated residential areas from commercial and industrial zones. This approach, while organized, led to numerous challenges including long commutes, car dependency, and decreased social interaction.</p>
          
          <p>Mixed-use developments represent a return to more traditional urban forms, where people lived above or near their workplaces and had easy access to daily necessities. This modern interpretation of historical urban design is proving to be a powerful tool for addressing contemporary urban challenges.</p>
          
          <h2>Creating Vibrant Communities</h2>
          <p>One of the most significant benefits of mixed-use developments is the creation of vibrant, 24/7 communities. When residential apartments sit above retail spaces, restaurants, and offices, areas remain active throughout the day rather than emptying after business hours.</p>
          
          <p>This constant activity contributes to several positive outcomes:</p>
          <ul>
            <li>Enhanced security through natural surveillance</li>
            <li>Increased foot traffic for local businesses</li>
            <li>Greater opportunities for social interaction</li>
            <li>Reduced need for long-distance travel</li>
            <li>More efficient use of infrastructure</li>
          </ul>
          
          <h2>Sustainability Benefits</h2>
          <p>Mixed-use developments align perfectly with sustainability goals. By placing residences, workplaces, and amenities in close proximity, these developments can significantly reduce transportation-related carbon emissions. Residents can walk, cycle, or take short public transit trips rather than driving long distances.</p>
          
          <p>Additionally, the density of mixed-use developments allows for more efficient:</p>
          <ul>
            <li>Energy distribution systems</li>
            <li>Water management</li>
            <li>Waste collection and recycling</li>
            <li>Land use, preserving green spaces elsewhere</li>
          </ul>
          
          <h2>Economic Advantages</h2>
          <p>The economic benefits of mixed-use developments extend to multiple stakeholders. For developers, these projects often command premium prices due to their convenience and amenities. For businesses, the built-in customer base of residents provides a steady stream of potential customers.</p>
          
          <p>For municipal governments, mixed-use developments can generate higher tax revenues per square foot compared to single-use developments. Additionally, infrastructure costs are typically lower due to the concentration of users in a smaller area.</p>
          
          <h2>Challenges and Considerations</h2>
          <p>Despite their many advantages, mixed-use developments come with unique challenges. These include:</p>
          <ul>
            <li>Complex financing and development processes</li>
            <li>Higher initial construction costs</li>
            <li>Potential conflicts between different uses (e.g., noise from restaurants affecting residents)</li>
            <li>More complicated property management requirements</li>
            <li>Zoning and regulatory hurdles in some jurisdictions</li>
          </ul>
          
          <p>Successful mixed-use developments require careful planning, thoughtful design, and ongoing management to ensure that different uses complement rather than conflict with each other.</p>
          
          <h2>The Future of Urban Spaces</h2>
          <p>As East African cities continue to grow rapidly, mixed-use developments offer a promising model for sustainable urban expansion. By creating walkable, diverse neighborhoods with a mix of housing, employment, and amenities, these developments can help address challenges related to transportation, housing affordability, and social cohesion.</p>
          
          <p>At Trusty Group, we're committed to developing mixed-use projects that reflect the unique character and needs of each community while promoting sustainable, vibrant urban environments for generations to come.</p>
        `,
        category: "insights",
        tags: ["realestate", "urban", "development"],
        author: "Eric Hitimana",
        authorRole: "Chief of Research Program & COO",
        authorImage: profile,
        publishDate: "December 18, 2024",
        readTime: "7 min read",
        image: Developments,
        featured: false
      },
      {
        id: 5,
        title: "Building Communities: The Social Impact of Trusty Group Projects",
        excerpt: "How our development projects go beyond buildings to create lasting positive impacts on communities and social cohesion.",
        content: `
          <p>At Trusty Group, we believe that construction and development go far beyond creating physical structures. Our projects aim to build communities, foster social cohesion, and create lasting positive impacts on the people who live and work in the spaces we create.</p>
          
          <h2>Community-Centered Design</h2>
          <p>Our approach to development begins with understanding the needs and aspirations of the communities we serve. Before breaking ground on any project, we engage extensively with local residents, businesses, and stakeholders to ensure our developments enhance rather than disrupt existing community dynamics.</p>
          
          <p>This community-centered design process has led to innovations such as:</p>
          <ul>
            <li>Integrating public spaces that reflect local cultural preferences</li>
            <li>Preserving historic elements that hold community significance</li>
            <li>Creating flexible spaces that can adapt to changing community needs</li>
            <li>Incorporating facilities specifically requested by community members</li>
          </ul>
          
          <h2>Fostering Social Connections</h2>
          <p>Research consistently shows that strong social connections are essential for human wellbeing. Our developments are designed to facilitate these connections through thoughtful architecture and urban planning.</p>
          
          <p>Key elements of our approach include:</p>
          <ul>
            <li>Creating communal spaces that encourage interaction</li>
            <li>Designing walkable neighborhoods that promote chance encounters</li>
            <li>Building mixed-use developments that bring diverse groups together</li>
            <li>Incorporating technology that facilitates community organization and communication</li>
          </ul>
          
          <h2>Economic Empowerment</h2>
          <p>We recognize that thriving communities need economic opportunities. Our projects create jobs not just during construction but also through the businesses and facilities they house. Additionally, we implement several economic empowerment initiatives:</p>
          <ul>
            <li>Skills training programs for local residents</li>
            <li>Partnerships with local businesses for project supplies and services</li>
            <li>Incubator spaces for entrepreneurs within our developments</li>
            <li>Microfinance programs to support community-based businesses</li>
          </ul>
          
          <h2>Environmental Stewardship</h2>
          <p>Community wellbeing is inextricably linked to environmental health. Our developments incorporate sustainable practices that minimize environmental impact while creating healthier living spaces:</p>
          <ul>
            <li>Green spaces that promote biodiversity and mental wellbeing</li>
            <li>Energy-efficient systems that reduce costs for residents</li>
            <li>Water conservation measures that preserve local resources</li>
            <li>Waste reduction strategies that minimize environmental impact</li>
          </ul>
          
          <h2>Building Intergenerational Communities</h2>
          <p>Healthy communities include people of all ages. Our developments are designed to accommodate diverse age groups and facilitate intergenerational interaction:</p>
          <ul>
            <li>Housing options suitable for different life stages</li>
            <li>Accessible design that accommodates various physical abilities</li>
            <li>Recreational spaces that appeal to different age groups</li>
            <li>Community programs that bring together various generations</li>
          </ul>
          
          <h2>Measuring Social Impact</h2>
          <p>We believe in accountability and measuring the real-world impact of our work. For each project, we establish social impact goals and metrics to evaluate our success:</p>
          <ul>
            <li>Resident satisfaction and wellbeing surveys</li>
            <li>Community engagement metrics</li>
            <li>Economic impact assessments</li>
            <li>Environmental performance indicators</li>
          </ul>
          
          <h2>Case Study: Kigali Heights</h2>
          <p>Our Kigali Heights development exemplifies our community-building approach. Beyond creating a modern mixed-use space, this project has:</p>
          <ul>
            <li>Created over 1,000 permanent jobs</li>
            <li>Established a community hub for cultural events</li>
            <li>Implemented an apprenticeship program for local youth</li>
            <li>Reduced carbon emissions through innovative design</li>
          </ul>
          
          <p>At Trusty Group, we're committed to creating developments that don't just house people, but bring them together, support their aspirations, and foster a sense of belonging. We believe that when we build with communities in mind, we create spaces that truly enrich lives and stand the test of time.</p>
        `,
        category: "insights",
        tags: ["community", "impact", "development"],
        author: "Marie Claire Uwera",
        authorRole: "Chief Personnel Officer",
        authorImage: profile,
        publishDate: "December 5, 2024",
        readTime: "5 min read",
        image: Building,
        featured: false
      },
      {
        id: 6,
        title: "Optimizing Construction Timelines: Best Practices for Project Management",
        excerpt: "Expert tips on how to keep construction projects on schedule and within budget through effective project management techniques.",
        content: `
          <p>In the construction industry, time truly is money. Delays can lead to cost overruns, dissatisfied clients, and damaged reputations. At Trusty Construction, we've refined our project management approach to optimize timelines while maintaining quality standards. Here are our best practices for keeping construction projects on schedule and within budget.</p>
          
          <h2>Comprehensive Pre-Construction Planning</h2>
          <p>The foundation of efficient project management is thorough pre-construction planning. This critical phase should include:</p>
          <ul>
            <li>Detailed scope definition with clear deliverables</li>
            <li>Realistic timeline development with buffer periods</li>
            <li>Comprehensive risk assessment and mitigation strategies</li>
            <li>Resource allocation planning</li>
            <li>Stakeholder communication protocols</li>
          </ul>
          
          <p>At Trusty Construction, we typically allocate 10-15% of the total projected timeline to planning. This investment pays dividends by reducing costly changes and delays during construction.</p>
          
          <h2>Advanced Scheduling Technologies</h2>
          <p>Modern scheduling tools have revolutionized construction project management. We implement:</p>
          <ul>
            <li>Critical Path Method (CPM) scheduling to identify and manage essential tasks</li>
            <li>4D BIM (Building Information Modeling) to visualize construction sequences</li>
            <li>Resource-loaded schedules that account for labor and equipment availability</li>
            <li>Weather-informed scheduling that anticipates seasonal variations</li>
            <li>Mobile-accessible scheduling platforms for real-time updates</li>
          </ul>
          
          <p>These technologies enable us to create more accurate timelines and quickly adapt when circumstances change.</p>
          
          <h2>Effective Supply Chain Management</h2>
          <p>Material delays are among the most common causes of project setbacks. To mitigate this risk, we recommend:</p>
          <ul>
            <li>Early procurement of long-lead items</li>
            <li>Developing relationships with multiple suppliers</li>
            <li>Creating detailed material delivery schedules</li>
            <li>Implementing just-in-time delivery for storage-sensitive materials</li>
            <li>Regular supplier performance evaluations</li>
          </ul>
          
          <p>Additionally, we maintain a database of typical lead times for various materials, allowing us to accurately incorporate procurement into our master schedules.</p>
          
          <h2>Skilled Workforce Management</h2>
          <p>Productive, well-coordinated teams are essential for maintaining project momentum. Our approach includes:</p>
          <ul>
            <li>Detailed labor forecasting based on historical productivity data</li>
            <li>Strategic subcontractor selection and management</li>
            <li>Regular skills training and safety education</li>
            <li>Incentive programs tied to schedule adherence</li>
            <li>Cross-training teams to reduce dependency on specific individuals</li>
          </ul>
          
          <p>We've found that investing in worker wellbeing and skill development pays off through improved productivity and reduced turnover.</p>
          
          <h2>Proactive Communication Systems</h2>
          <p>Communication breakdowns can quickly derail project timelines. We implement:</p>
          <ul>
            <li>Daily huddles to address immediate concerns</li>
            <li>Weekly coordination meetings with all key stakeholders</li>
            <li>Cloud-based document management systems</li>
            <li>Real-time progress reporting dashboards</li>
            <li>Structured escalation protocols for decision-making</li>
          </ul>
          
          <p>Clear communication channels ensure that issues are identified and resolved quickly before they impact the critical path.</p>
          
          <h2>Rigorous Quality Control</h2>
          <p>Rework is a significant cause of schedule delays. Our quality control program includes:</p>
          <ul>
            <li>Phase-specific quality checklists</li>
            <li>Regular third-party inspections</li>
            <li>Digital documentation of quality verifications</li>
            <li>Pre-installation conferences for complex systems</li>
            <li>Lessons learned documentation and implementation</li>
          </ul>
          
          <p>By emphasizing "right the first time" execution, we minimize costly rework and keep projects moving forward.</p>
          
          <h2>Adaptive Management Approach</h2>
          <p>Despite the best planning, construction projects will face unexpected challenges. An adaptive management approach includes:</p>
          <ul>
            <li>Regular schedule reviews and adjustments</li>
            <li>Scenario planning for potential disruptions</li>
            <li>Fast-tracking capabilities for critical activities</li>
            <li>Cross-functional problem-solving teams</li>
            <li>Documented change management procedures</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>At Trusty Construction, we've found that optimizing construction timelines requires a combination of thorough planning, advanced technologies, skilled team management, and adaptive problem-solving. By implementing these best practices, we consistently deliver projects on schedule and within budget, even in challenging environments.</p>
          
          <p>Remember that each project is unique, and management approaches should be tailored to specific circumstances. However, these fundamental principles provide a solid foundation for effective construction project management.</p>
        `,
        category: "tips",
        tags: ["construction", "management", "efficiency"],
        author: "William Tuyikunde",
        authorRole: "Project Lead Engineer",
        authorImage: profile,
        publishDate: "November 22, 2024",
        readTime: "6 min read",
        image: Optimizing,
        featured: false
      },
      {
        id: 7,
        title: "Real Estate Valuation: Understanding Property Worth in Changing Markets",
        excerpt: "A comprehensive guide to understanding how properties are valued and what factors influence their worth in dynamic market conditions.",
        content: `
          <p>Understanding property valuation is essential for anyone involved in real estate, whether you're buying, selling, investing, or developing. In dynamic markets like those found across East Africa, valuation becomes even more complex as rapid development, changing regulations, and evolving buyer preferences create a constantly shifting landscape.</p>
          
          <h2>The Fundamentals of Property Valuation</h2>
          <p>At its core, property valuation is about determining the fair market value of a property - the price at which it would likely sell under current market conditions. While this sounds straightforward, the process involves analyzing numerous factors and applying specialized methodologies.</p>
          
          <p>The three primary approaches to property valuation are:</p>
          <ul>
            <li><strong>Sales Comparison Approach</strong>: Compares the property to similar properties that have recently sold</li>
            <li><strong>Income Approach</strong>: Estimates value based on the income the property generates or could generate</li>
            <li><strong>Cost Approach</strong>: Calculates value based on what it would cost to replace the property</li>
          </ul>
          
          <p>Professional valuers typically use a combination of these approaches, giving more weight to whichever is most applicable to the specific property and market conditions.</p>
          
          <h2>Key Factors Affecting Property Value</h2>
          <p>Numerous factors influence property values, including:</p>
          
          <h3>Location Factors</h3>
          <ul>
            <li>Proximity to amenities (schools, hospitals, shopping)</li>
            <li>Infrastructure development (roads, utilities, public transportation)</li>
            <li>Neighborhood quality and safety</li>
            <li>Views and natural features</li>
            <li>Zoning regulations and land use patterns</li>
          </ul>
          
          <h3>Property-Specific Factors</h3>
          <ul>
            <li>Size and usable space</li>
            <li>Age and condition</li>
            <li>Quality of construction and materials</li>
            <li>Architectural style and design</li>
            <li>Energy efficiency and sustainability features</li>
            <li>Unique features or limitations</li>
          </ul>
          
          <h3>Market Factors</h3>
          <ul>
            <li>Supply and demand dynamics</li>
            <li>Economic conditions (local, national, global)</li>
            <li>Interest rates and financing availability</li>
            <li>Investment trends and capital flows</li>
            <li>Regulatory changes affecting real estate</li>
          </ul>
          
          <h2>Valuation in Dynamic Markets</h2>
          <p>In rapidly changing markets, traditional valuation methods may need to be supplemented with additional analyses:</p>
          
          <h3>Trend Analysis</h3>
          <p>Tracking price movements over time can help identify patterns and predict future value directions. This is particularly important in emerging markets where historical data may be limited.</p>
          
          <h3>Development Potential Analysis</h3>
          <p>In areas undergoing significant development, the potential for future use or rezoning may significantly impact current value. This "highest and best use" analysis is crucial in evolving urban areas.</p>
          
          <h3>Risk Assessment</h3>
          <p>Evaluating the stability of current value drivers and potential future disruptions helps create a more complete picture of a property's worth. This might include assessment of political stability, climate risks, or technological disruptions.</p>
          
          <h2>Common Valuation Challenges</h2>
          <p>Even with robust methodologies, several challenges can complicate property valuation:</p>
          
          <h3>Limited Comparable Sales</h3>
          <p>In unique properties or emerging markets, finding truly comparable recent sales can be difficult, making the sales comparison approach less reliable.</p>
          
          <h3>Rapidly Changing Markets</h3>
          <p>When markets are moving quickly, sales from even a few months ago may not reflect current values. Adjustments for market timing become crucial but are often subjective.</p>
          
          <h3>Valuation of Intangibles</h3>
          <p>Elements like brand value in commercial properties, historical significance, or future development potential can be difficult to quantify but significantly impact value.</p>
          
          <h2>Practical Applications of Valuation</h2>
          <p>Understanding property valuation serves various purposes:</p>
          <ul>
            <li><strong>For Buyers</strong>: Ensures you don't overpay and helps in negotiating purchase prices</li>
            <li><strong>For Sellers</strong>: Helps set realistic asking prices and identify value-adding improvements</li>
            <li><strong>For Investors</strong>: Enables identification of undervalued properties and accurate ROI calculations</li>
            <li><strong>For Developers</strong>: Guides land acquisition decisions and project feasibility assessments</li>
            <li><strong>For Lenders</strong>: Provides security assurance for property-backed loans</li>
          </ul>
          
          <h2>Working with Professional Valuers</h2>
          <p>While understanding valuation principles is valuable, professional valuers bring expertise, objectivity, and access to proprietary data that can lead to more accurate assessments. When selecting a valuer:</p>
          <ul>
            <li>Verify their credentials and professional affiliations</li>
            <li>Check their experience in your specific property type and location</li>
            <li>Request sample reports to assess thoroughness and clarity</li>
            <li>Understand their methodology and data sources</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Property valuation is both an art and a science, combining rigorous methodology with informed judgment. In changing markets, staying current with local developments, economic trends, and regulatory changes is essential for accurate valuations.</p>
          
          <p>At Trusty Group, our team includes experienced valuers who understand the nuances of East African property markets. Whether you're considering buying, selling, or developing real estate, we can provide the insights you need to make informed decisions in these dynamic environments.</p>
        `,
        category: "insights",
        tags: ["realestate", "valuation", "investment"],
        author: "Jean Claude Mutangana",
        authorRole: "Head of Real Estate Development",
        authorImage: profile,
        publishDate: "November 5, 2024",
        readTime: "8 min read",
        image: Estate,
        featured: false
      },
      {
        id: 8,
        title: "Trusty Group Launches New Sustainable Housing Initiative",
        excerpt: "Announcing our commitment to sustainable development with the launch of an innovative housing project featuring eco-friendly technologies and community-centered design.",
        content: `
          <p>Trusty Group is proud to announce the launch of our new Sustainable Housing Initiative, a groundbreaking project that combines innovative eco-friendly technologies with community-centered design principles. This initiative represents a significant step forward in our commitment to creating developments that benefit both people and the planet.</p>
          
          <h2>Vision and Goals</h2>
          <p>The Sustainable Housing Initiative aims to demonstrate that environmentally responsible construction can be both economically viable and socially beneficial. Our specific goals include:</p>
          <ul>
            <li>Reducing the carbon footprint of residential construction by 40% compared to conventional methods</li>
            <li>Creating housing that reduces operational energy use by 60% compared to standard buildings</li>
            <li>Minimizing water consumption through efficient fixtures and rainwater harvesting</li>
            <li>Utilizing locally sourced, sustainable materials wherever possible</li>
            <li>Creating communities that foster social connection and economic opportunity</li>
          </ul>
          
          <h2>Project Components</h2>
          <p>The initiative will begin with the development of 120 housing units across three sites in Rwanda. Each development will incorporate:</p>
          
          <h3>Innovative Construction Methods</h3>
          <ul>
            <li>Compressed Stabilized Earth Blocks (CSEBs) produced on-site</li>
            <li>Timber frame construction using sustainably harvested wood</li>
            <li>Prefabricated components to reduce waste and construction time</li>
            <li>Green roofs and living walls to improve insulation and biodiversity</li>
          </ul>
          
          <h3>Renewable Energy Systems</h3>
          <ul>
            <li>Solar photovoltaic panels for electricity generation</li>
            <li>Solar thermal systems for water heating</li>
            <li>Passive design principles to maximize natural lighting and ventilation</li>
            <li>Energy storage solutions to ensure reliable power supply</li>
          </ul>
          
          <h3>Water Conservation Measures</h3>
          <ul>
            <li>Rainwater harvesting systems for irrigation and non-potable uses</li>
            <li>Greywater recycling for landscape irrigation</li>
            <li>Water-efficient fixtures and appliances</li>
            <li>Drought-resistant landscaping using native plants</li>
          </ul>
          
          <h3>Community-Centered Amenities</h3>
          <ul>
            <li>Shared gardens and agricultural spaces</li>
            <li>Community centers for gatherings and educational programs</li>
            <li>Co-working spaces to support entrepreneurship</li>
            <li>Childcare facilities and playgrounds</li>
          </ul>
          
          <h2>Economic Accessibility</h2>
          <p>A key component of the Sustainable Housing Initiative is ensuring that these environmentally friendly homes remain accessible to a broad range of income levels. We are implementing several strategies to achieve this:</p>
          <ul>
            <li>Partnerships with financial institutions to offer favorable mortgage terms</li>
            <li>Tiered pricing structures across different unit types</li>
            <li>Shared equity models for qualified buyers</li>
            <li>Rental options with pathways to ownership</li>
          </ul>
          
          <h2>Community Engagement</h2>
          <p>The success of sustainable housing depends not just on technology but on community adoption and engagement. Our initiative includes:</p>
          <ul>
            <li>Community consultation throughout the design and construction process</li>
            <li>Education programs on sustainable living practices</li>
            <li>Maintenance training for residents</li>
            <li>Ongoing support for community governance structures</li>
          </ul>
          
          <h2>Research and Knowledge Sharing</h2>
          <p>As part of our commitment to advancing sustainable construction practices across East Africa, the initiative includes a robust research component:</p>
          <ul>
            <li>Performance monitoring of building systems</li>
            <li>Resident satisfaction and behavior studies</li>
            <li>Cost-benefit analyses of various sustainable technologies</li>
            <li>Public dissemination of findings through publications and conferences</li>
          </ul>
          
          <h2>Timeline and Next Steps</h2>
          <p>Construction on the first site is scheduled to begin in April 2025, with completion expected by December 2025. The remaining sites will follow in six-month intervals.</p>
          
          <p>Interested parties are invited to attend our public information session on April 10, 2025, where detailed plans will be presented, and pre-registration for units will open.</p>
          
          <p>"This initiative represents everything we stand for at Trusty Group," said Frederic Byiringiro, CEO. "We believe that development should benefit communities and the environment while also making good business sense. Our Sustainable Housing Initiative brings these principles together in a tangible, impactful way."</p>
          
          <p>For more information about the Sustainable Housing Initiative or to register for updates, please contact our office or visit the dedicated section on our website.</p>
        `,
        category: "news",
        tags: ["sustainability", "housing", "initiative"],
        author: "Frederic Byiringiro",
        authorRole: "CEO & Chief Product Architect",
        authorImage: profile,
        publishDate: "March 15, 2025",
        readTime: "5 min read",
        image: Trusty,
        featured: true
      }
    ];
  
  useEffect(() => {
    // Find the blog post with the matching id
    const post = blogPosts.find(post => post.id === parseInt(id));
    
    if (post) {
      setBlog(post);
      
      // Get related posts (same category or tags)
      const related = blogPosts
        .filter(p => p.id !== post.id)
        .filter(p => p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
        .slice(0, 3);
      
      setRelatedPosts(related);
    } else {
      // Redirect to blog page if post not found
      navigate('/blog');
    }
    
    setLoading(false);
  }, [id, navigate]);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!blog) {
    return <div className="container mx-auto px-6 py-16">Post not found</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block mb-4">
              <span className="text-white bg-blue-600 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="flex items-center">
                <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full mr-2" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>{blog.publishDate}</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Post Navigation */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
            <Link to="/blog" className="flex items-center text-gray-600 hover:text-blue-600 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex space-x-2">
              <button 
                className={`py-2 px-4 rounded-lg ${activeTab === 'article' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => handleTabChange('article')}
              >
                Article
              </button>
              <button 
                className={`py-2 px-4 rounded-lg ${activeTab === 'author' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => handleTabChange('author')}
              >
                Author
              </button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {activeTab === 'article' ? (
                <>
                  {/* Article Content */}
                  <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                    <div className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-a:text-blue-600">
                      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Share */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Share this article</h3>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-[#1877F2] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#1865D1] transition duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </button>
                      <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#1A91DA] transition duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Twitter
                      </button>
                      <button className="bg-[#0A66C2] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#0A5BB8] transition duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </button>
                      <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#22BF5B] transition duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </button>
                    </div>
                  </div>
                  
                  {/* Comments Section */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="font-semibold text-lg mb-6">Comments (3)</h3>
                    
                    {/* Sample Comments */}
                    <div className="space-y-6">
                      <div className="border-b border-gray-100 pb-6">
                        <div className="flex items-start space-x-4">
                          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-semibold">Alain Niganze</h4>
                              <span className="text-gray-500 text-sm">2 days ago</span>
                            </div>
                            <p className="text-gray-700 mt-2">Great article! The insights on sustainable materials are particularly valuable for our upcoming project.</p>
                            <div className="flex items-center mt-3 space-x-4">
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Like (12)
                              </button>
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b border-gray-100 pb-6">
                        <div className="flex items-start space-x-4">
                          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-semibold">House of kemmy</h4>
                              <span className="text-gray-500 text-sm">1 week ago</span>
                            </div>
                            <p className="text-gray-700 mt-2">I'm curious about the cost implications of these sustainable materials. Has Trusty Group done any analysis on ROI timelines?</p>
                            <div className="flex items-center mt-3 space-x-4">
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Like (8)
                              </button>
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-4">
                          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-semibold">Mark Williams</h4>
                              <span className="text-gray-500 text-sm">2 weeks ago</span>
                            </div>
                            <p className="text-gray-700 mt-2">Would love to see some case studies showing these principles in action. Keep up the great content!</p>
                            <div className="flex items-center mt-3 space-x-4">
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Like (3)
                              </button>
                              <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comment Form */}
                    <div className="mt-8">
                      <h4 className="font-semibold mb-4">Leave a Comment</h4>
                      <form>
                        <div className="mb-4">
                          <textarea 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Write your comment here..."
                          ></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                          Submit Comment
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                // Author Tab Content
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img src={blog.authorImage} alt={blog.author} className="w-32 h-32 rounded-full" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{blog.author}</h2>
                      <p className="text-blue-600 mb-4">{blog.authorRole}</p>
                      <p className="text-gray-700 mb-6">
                        Frederic Byiringiro is a renowned architect and sustainable construction advocate with over 15 years of experience in the East African construction industry. As the founder and CEO of Trusty Group, he has pioneered innovative building approaches that combine traditional techniques with modern sustainable materials.
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">More Posts by {blog.author}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-2">Optimizing Construction Workflows for Efficiency</h4>
                        <p className="text-gray-600 mb-3">A practical guide to streamlining construction processes and improving project timelines.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Article →</a>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-2">Building Resilient Communities Through Design</h4>
                        <p className="text-gray-600 mb-3">How thoughtful architecture can contribute to social cohesion and community resilience.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Article →</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Author Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={blog.authorImage} alt={blog.author} className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-lg">{blog.author}</h3>
                    <p className="text-blue-600">{blog.authorRole}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Passionate about sustainable construction and innovative building techniques with a focus on East African architectural heritage.
                </p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200">
                  View All Articles
                </button>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <Link to={`/blog/${post.id}`} className="font-medium hover:text-blue-600 transition duration-200 line-clamp-2">
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-6 mb-8 text-white">
                <h3 className="font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
                <p className="mb-4 opacity-90">Stay updated with the latest insights on construction and real estate</p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #construction
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #realestate
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #sustainability
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #architecture
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #interiordesign
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #investment
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200">
                    #urbanplanning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;