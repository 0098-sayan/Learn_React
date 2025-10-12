import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Mountain View, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      post: "Backend Engineer",
      datePosted: "5 days ago",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Redmond, WA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      post: "Full Stack Developer",
      datePosted: "1 week ago",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Cupertino, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      post: "Frontend Engineer",
      datePosted: "3 days ago",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Menlo Park, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      post: "Backend Engineer",
      datePosted: "1 day ago",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: " $70/hour",
      location: "Seattle, WA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      post: "Full Stack Developer",
      datePosted: "2 weeks ago",
      tag1: "Part-time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Los Gatos, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/stripe.com",
      companyName: "Stripe",
      post: "Backend Engineer",
      datePosted: "4 days ago",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$100/hour",
      location: "San Francisco, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      post: "Frontend Engineer",
      datePosted: "1 week ago",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "San Francisco, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      post: "Full Stack Developer",
      datePosted: "6 days ago",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$85/hour",
      location: "San Francisco, CA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      post: "Backend Engineer",
      datePosted: "3 days ago",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$65/hour",
      location: "Austin, TX",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {jobOpenings.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Card
                company={elem.companyName}
                post={elem.post}
                date={elem.datePosted}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
                logo={elem.brandLogo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
