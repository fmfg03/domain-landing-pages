import React, { useEffect, useState } from 'react';
import { getDomainConfig, getPreservedPaths, getRedirectTarget } from '../domainConfig';

const DomainRouter = () => {
  const [domainInfo, setDomainInfo] = useState(null);
  const [currentPath, setCurrentPath] = useState('');
  
  useEffect(() => {
    const hostname = window.location.hostname;
    const path = window.location.pathname;
    
    setCurrentPath(path);
    const config = getDomainConfig(hostname);
    setDomainInfo({
      domain: hostname,
      config: config
    });
    
    // Handle redirects
    const redirectTarget = getRedirectTarget(hostname, path);
    if (redirectTarget && config.type === 'redirect') {
      window.location.href = `https://${redirectTarget}${path}`;
    }
  }, []);

  if (!domainInfo) {
    return React.createElement("div", null, "Loading...");
  }

  const { domain, config } = domainInfo;
  const preservedPaths = getPreservedPaths(domain);
  
  // Check if we're on a preserved path
  if (config.type === 'preserve' && preservedPaths.some(p => currentPath.startsWith(p))) {
    return React.createElement(
      "div", 
      { className: "container mx-auto p-4" },
      React.createElement(
        "div", 
        { className: "bg-white rounded-lg shadow p-6" },
        React.createElement("h1", { className: "text-2xl font-bold mb-4" }, domain),
        React.createElement(
          "div", 
          { className: "mb-4" },
          React.createElement("h2", { className: "text-xl" }, "Current path: ", currentPath)
        ),
        React.createElement(
          "nav", 
          { className: "space-y-2" },
          preservedPaths.map(path => 
            React.createElement(
              "a",
              {
                key: path,
                href: path,
                className: "block p-2 hover:bg-gray-100 rounded transition"
              },
              path
            )
          )
        )
      )
    );
  }

  return React.createElement(
    "div", 
    { className: "container mx-auto p-4" },
    React.createElement(
      "div", 
      { className: "bg-white rounded-lg shadow p-6 text-center" },
      React.createElement("h1", { className: "text-2xl font-bold mb-4" }, domain),
      React.createElement("p", { className: "mb-4" }, "Redirecting you to our main site..."),
      React.createElement("div", { className: "animate-pulse" }, "Loading...")
    )
  );
};

export default DomainRouter;
