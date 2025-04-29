import React, { useState } from 'react';
import './RepositoryCard.css';
import { colors } from '../../_constants/constants';

const RepositoryCard = ({
  name,
  description,
  url,
  language
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determinar el color del ícono del lenguaje según el lenguaje
  const getLanguageColor = (lang) => {
    return colors[lang] || "#8e8e8e";
  };

  return (
    <div
      className={`repository-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="repository-header">
        <h2 className="repository-name">{name}</h2>
        <div className="repository-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="repository-icon">
            {/* Fork icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
              <path d="M12 12v6" />
            </svg>
          </a>
        </div>
      </div>

      <p className="repository-description">{description}</p>

      <div className="repository-footer">
        <div className="repository-language">
          <div
            className="language-color"
            style={{ backgroundColor: getLanguageColor(language) }}
          />
          <span>{language}</span>
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer" className="repository-url">
          {/* Code icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>url</span>
        </a>
      </div>
    </div>
  );
};

export default RepositoryCard;