import { useEffect } from 'react';

const PageMeta = ({ title, description, noindex = false }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set meta description tag
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // Set meta robots tag (noindex if needed)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = 'noindex, follow';
    } else if (metaRobots) {
      metaRobots.parentNode.removeChild(metaRobots);
    }
  }, [title, description, noindex]);

  return null;
};

export default PageMeta;
