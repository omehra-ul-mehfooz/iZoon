import React from 'react';

interface DiagramProps {
  className?: string;
}

/**
 * Explanatory Routing Diagram for Section 03 (All Numbers)
 */
export const DirectoryRoutingDiagram: React.FC<DiagramProps> = ({ className = '' }) => (
  <svg viewBox="0 0 680 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="1" y="1" width="678" height="154" rx="10" fill="#FFFFFF" stroke="#CFDDD4" />
    {/* Box 1 */}
    <rect x="20" y="20" width="196" height="116" rx="8" fill="#F6F9F7" stroke="#BFD1C6" />
    <text x="36" y="46" fill="#1D4D3A" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      01 · PHYSICAL DANGER
    </text>
    <text x="36" y="72" fill="#19211D" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      Call 112 Immediately
    </text>
    <text x="36" y="96" fill="#536159" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Offline threats, stalking,
    </text>
    <text x="36" y="114" fill="#536159" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      or urgent safety risk
    </text>

    {/* Arrow 1 */}
    <path d="M224 78H238M233 73L238 78L233 83" stroke="#536159" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Box 2 */}
    <rect x="242" y="20" width="196" height="116" rx="8" fill="#F6F9F7" stroke="#BFD1C6" />
    <text x="258" y="46" fill="#1D4D3A" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      02 · CYBER REPORTING
    </text>
    <text x="258" y="72" fill="#19211D" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      cybercrime.gov.in / 1930
    </text>
    <text x="258" y="96" fill="#536159" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Portal for cybercrime reports;
    </text>
    <text x="258" y="114" fill="#536159" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      1930 for financial fraud
    </text>

    {/* Arrow 2 */}
    <path d="M446 78H460M455 73L460 78L455 83" stroke="#536159" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Box 3 */}
    <rect x="464" y="20" width="196" height="116" rx="8" fill="#DCE7E0" stroke="#9FB9AA" />
    <text x="480" y="46" fill="#1D4D3A" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      03 · SUPPORT &amp; CARE
    </text>
    <text x="480" y="72" fill="#19211D" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      181 / 14416 Tele-MANAS
    </text>
    <text x="480" y="96" fill="#2B3A32" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Women’s support, counselling,
    </text>
    <text x="480" y="114" fill="#2B3A32" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      and emotional care
    </text>
  </svg>
);

/**
 * Technical Pipeline Diagram for Section 04 (Deepfakes)
 */
export const DeepfakePipelineDiagram: React.FC<DiagramProps> = ({ className = '' }) => (
  <svg viewBox="0 0 680 176" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="1" y="1" width="678" height="174" rx="10" fill="#0E172B" stroke="#26334D" />

    {/* Stage 1 */}
    <rect x="22" y="24" width="190" height="128" rx="8" fill="#16223D" stroke="#2F3F63" />
    <text x="38" y="50" fill="#94A3C6" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
      STAGE 01 · SOURCE
    </text>
    <text x="38" y="76" fill="#F4F6FA" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      Public Photo Harvested
    </text>
    <text x="38" y="102" fill="#B8C3DB" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Copied from a profile photo,
    </text>
    <text x="38" y="120" fill="#B8C3DB" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      campus reel, or group clip.
    </text>

    {/* Connector 1 */}
    <path d="M218 88H240M234 82L240 88L234 94" stroke="#7E91D6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

    {/* Stage 2 */}
    <rect x="245" y="24" width="190" height="128" rx="8" fill="#1D264A" stroke="#5B4B8A" strokeDasharray="4 3" />
    <text x="261" y="50" fill="#B8ADE0" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
      STAGE 02 · SYNTHESIS
    </text>
    <text x="261" y="76" fill="#F4F6FA" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      AI Face / Voice Swap
    </text>
    <text x="261" y="102" fill="#C9C5E3" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Model maps facial landmarks
    </text>
    <text x="261" y="120" fill="#C9C5E3" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      or voice cadence onto media.
    </text>

    {/* Connector 2 */}
    <path d="M441 88H463M457 82L463 88L457 94" stroke="#7E91D6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

    {/* Stage 3 */}
    <rect x="468" y="24" width="190" height="128" rx="8" fill="#16223D" stroke="#4361EE" />
    <text x="484" y="50" fill="#8FA8FF" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
      STAGE 03 · RESPONSE
    </text>
    <text x="484" y="76" fill="#F4F6FA" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="600">
      Archive &amp; Request Takedown
    </text>
    <text x="484" y="102" fill="#B8C3DB" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Save URLs, report synthetic
    </text>
    <text x="484" y="120" fill="#B8C3DB" fontSize="11.5" fontFamily="Plus Jakarta Sans, sans-serif">
      abuse, and protect privacy.
    </text>
  </svg>
);

/**
 * Privacy Architecture Diagram for Section 06 (Image Removal / StopNCII)
 */
export const StopNciiPrivacyDiagram: React.FC<DiagramProps> = ({ className = '' }) => (
  <svg viewBox="0 0 680 184" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="1" y="1" width="678" height="182" rx="10" fill="#F7F5FA" stroke="#DDD6EA" />

    {/* Step 1 */}
    <rect x="18" y="20" width="200" height="144" rx="8" fill="#FFFFFF" stroke="#D3C9E4" />
    <text x="32" y="44" fill="#6E5A94" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      01 · YOUR DEVICE ONLY
    </text>
    <text x="32" y="68" fill="#2A233D" fontSize="14" fontFamily="Playfair Display, serif" fontWeight="600">
      Stays on Your Device
    </text>
    <text x="32" y="92" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      The image or video stays on your
    </text>
    <text x="32" y="108" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      device during hash creation. The
    </text>
    <text x="32" y="124" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      digital hash is shared with
    </text>
    <text x="32" y="140" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      participating platforms.
    </text>

    {/* Arrow 1 */}
    <path d="M222 92H236M231 87L236 92L231 97" stroke="#6E5A94" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Step 2 */}
    <rect x="240" y="20" width="200" height="144" rx="8" fill="#ECE7F5" stroke="#BFB2DA" />
    <text x="254" y="44" fill="#382D54" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      02 · LOCAL HASHING
    </text>
    <text x="254" y="68" fill="#2A233D" fontSize="13.5" fontFamily="Playfair Display, serif" fontWeight="600">
      Digital Fingerprint (Hash)
    </text>
    <text x="254" y="92" fill="#3E3A4F" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      StopNCII creates a Digital
    </text>
    <text x="254" y="108" fill="#3E3A4F" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Fingerprint (Hash) directly on
    </text>
    <text x="254" y="124" fill="#3E3A4F" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      your device browser.
    </text>

    {/* Arrow 2 */}
    <path d="M444 92H458M453 87L458 92L453 97" stroke="#6E5A94" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Step 3 */}
    <rect x="462" y="20" width="200" height="144" rx="8" fill="#FFFFFF" stroke="#D3C9E4" />
    <text x="476" y="44" fill="#6E5A94" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      03 · PLATFORM CHECK
    </text>
    <text x="476" y="68" fill="#2A233D" fontSize="13.5" fontFamily="Playfair Display, serif" fontWeight="600">
      Policy-Based Action
    </text>
    <text x="476" y="92" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      Participating platforms check
    </text>
    <text x="476" y="108" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      for matching hashes and may
    </text>
    <text x="476" y="124" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      take action under their
    </text>
    <text x="476" y="140" fill="#474957" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif">
      policies.
    </text>
  </svg>
);
