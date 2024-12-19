import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function GDPR() {
  // Data for sections that can be mapped
  const gdprPrinciples = [
    "Lawfulness, fairness, and transparency: Personal data is processed lawfully, fairly, and transparently.",
    "Purpose limitation: Personal data is collected for specified, explicit, and legitimate purposes.",
    "Data minimization: Personal data is adequate, relevant, and limited to what is necessary for the purposes of processing.",
    "Accuracy: Personal data is accurate and kept up-to-date.",
    "Storage limitation: Personal data is retained only for as long as necessary.",
    "Integrity and confidentiality: Personal data is processed securely, using appropriate technical and organizational measures.",
  ];

  const lawfulBases = [
    "Consent from the data subject.",
    "Necessity for the performance of a contract.",
    "Compliance with legal obligations.",
    "Protection of vital interests.",
    "Performance of a task carried out in the public interest or in the exercise of official authority.",
    "Legitimate interests pursued by Nexus Botix or a third party.",
  ];

  const dataSubjectRights = [
    {
      title: "Right to Access",
      description:
        "Individuals can request access to their personal data and information about how it is processed.",
    },
    {
      title: "Right to Rectification",
      description:
        "Individuals can request the correction of inaccurate or incomplete data.",
    },
    {
      title: "Right to Erasure",
      description:
        'Individuals can request the deletion of their personal data ("Right to be Forgotten") under certain circumstances.',
    },
    {
      title: "Right to Restriction",
      description:
        "Individuals can request restrictions on processing activities in specific situations.",
    },
    {
      title: "Right to Data Portability",
      description:
        "Individuals can receive their personal data in a structured, commonly used format and transmit it to another data controller.",
    },
    {
      title: "Right to Object",
      description:
        "Individuals can object to the processing of their data for certain purposes, including direct marketing.",
    },
    {
      title: "Rights in Automated Decision-Making",
      description:
        "Individuals have the right not to be subject to decisions made solely by automated processes that have a significant impact.",
    },
  ];

  const securityMeasures = [
    "Encryption of data in transit and at rest.",
    "Secure authentication and access control mechanisms.",
    "Regular vulnerability assessments and penetration testing.",
    "Secure data storage and backup solutions.",
    "Employee training on GDPR compliance and data protection best practices.",
  ];

  return (
    <div className="~px-0/56">
      <Header />
      <div className="px-5 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col text-center ~gap-5/3 ~mt-7/20 border-b ~pb-10/20 border-dashed border-gray-700">
          <h1 className="~text-4xl/5xl font-semibold">
            GDPR Compliance Statement
          </h1>
          <p className="~text-base/lg">
            Our commitment to protecting your personal data and complying with
            GDPR requirements.
          </p>
        </div>
        <div>
          <p className="font-semibold ~text-xl/2xl">
            GDPR Compliance Statement
          </p>
          <p className="italic">Last Updated: 2 December 2024</p>
        </div>

        {/* Introductory Paragraph */}
        <div className="flex flex-col gap-5">
          <p>
            At Nexus Botix, we are committed to protecting the privacy and
            security of personal data. As part of this commitment, we ensure
            that our practices comply with the requirements of the General Data
            Protection Regulation (GDPR) (Regulation (EU) 2016/679). This GDPR
            Compliance Statement outlines how we meet our legal obligations as a
            data controller and processor under the GDPR.
          </p>
        </div>

        {/* 1. Overview of GDPR */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">1. Overview of GDPR</h2>
          <p>
            The GDPR governs the collection, use, and storage of personal data
            for individuals within the European Economic Area (EEA). Its purpose
            is to safeguard personal data rights, increase transparency, and
            ensure organizations implement adequate security measures when
            handling such data.
          </p>
          <p>
            Nexus Botix complies with the following key principles of the GDPR:
          </p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            {gdprPrinciples.map((principle, index) => (
              <li key={index}>{principle}</li>
            ))}
          </ul>
        </div>

        {/* 2. Nexus Botix's GDPR Commitments */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            2. Nexus Botix's GDPR Commitments
          </h2>

          <h3 className="text-xl font-semibold">
            2.1 Lawful Basis for Processing
          </h3>
          <p>
            We ensure that all data processing activities have a lawful basis
            under Article 6 of the GDPR, which includes:
          </p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            {lawfulBases.map((basis, index) => (
              <li key={index}>{basis}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold">2.2 Data Subject Rights</h3>
          <p>
            Under the GDPR, data subjects are entitled to the following rights,
            which Nexus Botix fully upholds:
          </p>
          <div className="gap-5 flex flex-col">
            {dataSubjectRights.map((right, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-semibold">{right.title}</h4>
                <p>{right.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold">2.3 Data Transfers</h3>
          <p>
            When transferring personal data outside the EEA, we ensure
            compliance with GDPR requirements by implementing appropriate
            safeguards, such as:
          </p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            <li>Standard Contractual Clauses (SCCs).</li>
            <li>Adequacy decisions by the European Commission.</li>
            <li>Binding Corporate Rules (BCRs).</li>
            <li>Certification schemes or codes of conduct.</li>
          </ul>

          <h3 className="text-xl font-semibold">
            2.4 Data Protection by Design and Default
          </h3>
          <p>
            We adopt a "privacy by design and default" approach, embedding data
            protection into the development of our products, services, and
            business processes. This includes minimizing data collection,
            pseudonymization, and encryption.
          </p>

          <h3 className="text-xl font-semibold">
            2.5 Data Breach Notification
          </h3>
          <p>In the event of a personal data breach, Nexus Botix will:</p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            <li>
              Notify the relevant supervisory authority within 72 hours, where
              required by Article 33 of the GDPR.
            </li>
            <li>
              Inform affected data subjects without undue delay, where required
              by Article 34 of the GDPR.
            </li>
          </ul>
        </div>

        {/* 3. Nexus Botix's Security Measures */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            3. Nexus Botix's Security Measures
          </h2>
          <p>
            We take the security of personal data seriously and have implemented
            comprehensive measures to ensure its protection. These include:
          </p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            {securityMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>

        {/* 4. Data Processing Agreements (DPAs) */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            4. Data Processing Agreements (DPAs)
          </h2>
          <p>
            Nexus Botix has executed Data Processing Agreements (DPAs) with all
            relevant third-party vendors and partners. These agreements ensure
            that our service providers adhere to GDPR standards when processing
            personal data on our behalf.
          </p>
        </div>

        {/* 5. Roles and Responsibilities */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            5. Roles and Responsibilities
          </h2>

          <h3 className="text-xl font-semibold">5.1 Data Controller</h3>
          <p>
            When Nexus Botix determines the purpose and means of processing
            personal data, it acts as a data controller and complies with all
            GDPR obligations applicable to controllers.
          </p>

          <h3 className="text-xl font-semibold">5.2 Data Processor</h3>
          <p>
            When processing personal data on behalf of a customer, Nexus Botix
            acts as a data processor and follows the instructions of the data
            controller in compliance with the GDPR.
          </p>
        </div>

        {/* 6. Accountability and Governance */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            6. Accountability and Governance
          </h2>
          <p>
            Nexus Botix maintains comprehensive records of processing activities
            and regularly reviews its practices to ensure GDPR compliance. We
            have also appointed a Data Protection Officer (DPO) to oversee data
            protection policies and practices.
          </p>
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="font-semibold">Contact Our DPO</h3>
            <p>
              For inquiries or concerns regarding data protection, you may
              contact our DPO at:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@nexusbotix.com"
                className="text-custom-yellow hover:underline"
              >
                hello@nexusbotix.com
              </a>
            </p>
          </div>
        </div>

        {/* 7. Third-Party Processing */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            7. Third-Party Processing
          </h2>
          <p>
            We ensure that all third-party processors handling personal data on
            behalf of Nexus Botix comply with GDPR requirements. This includes
            conducting due diligence, ongoing monitoring, and requiring
            contractual agreements that include GDPR-compliant terms.
          </p>
        </div>

        {/* 8. Data Retention */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">8. Data Retention</h2>
          <p>
            Personal data is retained only for as long as necessary to fulfill
            the purposes for which it was collected or to comply with legal and
            regulatory obligations. Once data is no longer required, we securely
            delete or anonymize it.
          </p>
        </div>

        {/* 9. Supervisory Authority */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            9. Supervisory Authority
          </h2>
          <p>
            Individuals have the right to lodge a complaint with their local
            data protection supervisory authority if they believe their rights
            under the GDPR have been violated.
          </p>
        </div>

        {/* 10. Commitment to Ongoing Compliance */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            10. Commitment to Ongoing Compliance
          </h2>
          <p>
            Nexus Botix recognizes that GDPR compliance is an ongoing
            responsibility. We are committed to continually improving our
            practices to ensure robust data protection and privacy for all
            users.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10 pb-5">
          <h2 className="font-semibold ~text-xl/2xl">Contact Us</h2>
          <p>
            For additional information or to exercise your GDPR rights, please
            contact us at:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@nexusbotix.com"
              className="text-custom-yellow hover:underline"
            >
              hello@nexusbotix.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
