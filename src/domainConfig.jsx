export const domainConfig = {
  // Core Platform (DR 60+)
  'themes-demo.com': {
    type: 'redirect',
    dr: 72,
    redirectTo: 'agentius.ai/themes',
    preserveLinks: true
  },
  'uptaxi.org': {
    type: 'redirect',
    dr: 65,
    redirectTo: 'agentius.ai/services',
    preserveLinks: true
  },
  'blogbarcelona.org': {
    type: 'redirect',
    dr: 65,
    redirectTo: 'agenticia.com',
    preserveLinks: true
  },
  '2f.tel': {
    type: 'redirect',
    dr: 61,
    redirectTo: 'everywhere.computer/url',
    preserveLinks: true
  },

  // Technical Authority (DR 45-59)
  'wpicus.com': {
    type: 'preserve',
    dr: 57,
    paths: ['/docs', '/tutorials', '/wordpress'],
    redirectTo: 'agentius.ai/dev'
  },
  'flexxtheme.com': {
    type: 'preserve',
    dr: 52,
    paths: ['/themes', '/docs'],
    redirectTo: 'agentius.ai/themes'
  },
  'mcubewebtechnology.com': {
    type: 'preserve',
    dr: 51,
    paths: ['/tech', '/solutions'],
    redirectTo: 'agentius.ai/tech'
  },

  // Educational Authority
  'refricagroup.com': {
    type: 'preserve',
    eduLinks: 38500,
    paths: ['/edu', '/research'],
    redirectTo: 'agentius.ai/edu'
  },
  'uvacomputerscience.com': {
    type: 'preserve',
    eduLinks: 46,
    paths: ['/cs', '/courses'],
    redirectTo: 'agentius.ai/cs'
  },
  'stanfordlibrary.us': {
    type: 'preserve',
    wikiLinks: true,
    paths: ['/papers', '/research'],
    redirectTo: 'agentius.ai/research'
  },

  // Marketing & Services
  'semoart.com': {
    type: 'redirect',
    dr: 44,
    redirectTo: 'aiagency.global'
  },
  'marketingseo.org': {
    type: 'redirect',
    searchVolume: '74K',
    redirectTo: 'aiagency.global/seo'
  },
  'digitalmarketingusa.com': {
    type: 'redirect',
    searchVolume: '246K',
    redirectTo: 'aiagency.global/usa'
  },

  // Technical Trust Flow
  'netbuilders.org': {
    type: 'preserve',
    tf: 25,
    paths: ['/dev', '/tools'],
    redirectTo: 'agentius.ai/builders'
  },
  'circuitolinks.com': {
    type: 'redirect',
    tf: 25,
    redirectTo: 'everywhere.computer/network'
  },

  // Regional Brands
  'hispanicagency.net': {
    type: 'redirect',
    dr: 27,
    redirectTo: 'agenticia.com/agency'
  },
  'obsessionmedia.es': {
    type: 'redirect',
    tf: 22,
    redirectTo: 'agenticia.com/media'
  },
  'informationdesign-berlin.de': {
    type: 'preserve',
    tf: 20,
    paths: ['/design', '/projects'],
    redirectTo: 'aiagency.global/de'
  },

  // Infrastructure
  'pilotmail.io': {
    type: 'redirect',
    redirectTo: 'everywhere.computer/mail'
  },
  'codeshape.io': {
    type: 'preserve',
    tf: 21,
    paths: ['/tools', '/docs'],
    redirectTo: 'agentius.ai/code'
  },
  'phpprotector.com': {
    type: 'preserve',
    tf: 20,
    paths: ['/security', '/docs'],
    redirectTo: 'agentius.ai/security'
  }
};

export const getDomainConfig = (domain) => {
  return domainConfig[domain] || {
    type: 'redirect',
    redirectTo: 'agentius.ai'
  };
};

export const getPreservedPaths = (domain) => {
  const config = getDomainConfig(domain);
  return config.type === 'preserve' ? config.paths : [];
};

export const shouldPreserveLinks = (domain) => {
  const config = getDomainConfig(domain);
  return config.preserveLinks || config.type === 'preserve';
};

export const getRedirectTarget = (domain, path = '') => {
  const config = getDomainConfig(domain);
  if (config.type === 'preserve' && config.paths.includes(path)) {
    return null;
  }
  return config.redirectTo;
};
