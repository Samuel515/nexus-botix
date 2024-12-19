import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function DataProcessingAgreement() {
  // Data for sections that can be mapped
  const definitions = [
    {
      title: "Personal Data",
      description:
        "Any information relating to an identified or identifiable natural person as defined under applicable data protection laws.",
    },
    {
      title: "Processing",
      description:
        "Any operation or set of operations performed on Personal Data, including collection, storage, use, disclosure, or deletion.",
    },
    {
      title: "Controller",
      description:
        "The entity that determines the purposes and means of processing Personal Data.",
    },
    {
      title: "Processor",
      description:
        "The entity that processes Personal Data on behalf of the Controller.",
    },
    {
      title: "Data Subject",
      description: "The individual whose Personal Data is being processed.",
    },
    {
      title: "Applicable Data Protection Laws",
      description:
        "All laws and regulations relating to the processing of Personal Data, including but not limited to the GDPR, the CCPA, and other relevant legislation.",
    },
  ];

  const processorObligations = [
    {
      title: "Process Data Only on Instructions",
      description:
        "Process Personal Data only based on the written instructions of the Controller unless required by law.",
    },
    {
      title: "Confidentiality",
      description:
        "Ensure that all personnel authorized to process Personal Data are bound by confidentiality obligations.",
    },
    {
      title: "Security Measures",
      description:
        "Implement appropriate technical and organizational measures to protect Personal Data against unauthorized access, loss, alteration, or disclosure.",
    },
    {
      title: "Sub-processors",
      description:
        "Engage sub-processors only with prior written consent from the Controller. Maintain a list of approved sub-processors and ensure they are contractually bound to comply with equivalent data protection obligations.",
    },
    {
      title: "Assistance with Data Subject Rights",
      description:
        "Assist the Controller in responding to Data Subject rights requests (e.g., access, rectification, erasure, portability, restriction, or objection).",
    },
    {
      title: "Data Breach Notification",
      description:
        "Notify the Controller without undue delay upon becoming aware of a Personal Data breach.",
    },
    {
      title: "Data Protection Impact Assessments (DPIA)",
      description:
        "Provide reasonable assistance to the Controller in conducting DPIAs and related consultations with data protection authorities.",
    },
  ];

  const controllerObligations = [
    {
      title: "Compliance with Laws",
      description:
        "Ensure compliance with applicable data protection laws, including the lawfulness of data processing instructions provided to the Processor.",
    },
    {
      title: "Data Accuracy",
      description:
        "Provide accurate and complete Personal Data to the Processor and promptly update any inaccuracies.",
    },
    {
      title: "Data Subject Rights Requests",
      description:
        "Manage and respond to Data Subject rights requests unless otherwise agreed in writing with the Processor.",
    },
  ];

  return (
    <div className="~px-0/56">
      <Header />
      <div className="px-5 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col text-center ~gap-5/3 ~mt-7/20 border-b ~pb-10/20 border-dashed border-gray-700">
          <h1 className="~text-4xl/5xl font-semibold">
            Data Processing Agreement
          </h1>
          <p className="~text-base/lg">
            This Data Processing Agreement outlines the terms and conditions for
            processing personal data between Nexus Botix and the customer.
          </p>
        </div>
        <div>
          <p className="font-semibold ~text-xl/2xl">
            Data Processing Agreement
          </p>
          <p className="italic">Last Updated: 2 December 2024</p>
        </div>

        {/* Introductory Paragraph */}
        <div className="flex flex-col gap-5">
          <p>
            This Data Processing Agreement ("DPA") forms part of the agreement
            between Nexus Botix ("Company," "Processor," "we," "us," or "our")
            and the customer ("Controller," "you," or "your") for the provision
            of Services involving the processing of personal data, as defined
            under applicable data protection laws. This DPA ensures that both
            parties comply with their respective obligations under applicable
            data protection laws, including the General Data Protection
            Regulation (GDPR), California Consumer Privacy Act (CCPA), and other
            relevant legislation.
          </p>
        </div>

        {/* 1. Definitions */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">1. Definitions</h2>
          <p>
            For the purposes of this DPA, the following terms have the meanings
            set out below:
          </p>
          <div className="gap-8 flex flex-col">
            {definitions.map((def, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`1.${index + 1} ${
                  def.title
                }`}</h3>
                <p>{def.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Scope and Application */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            2. Scope and Application
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              2.1 This DPA applies to all Personal Data processed by Nexus Botix
              on behalf of the Controller in connection with the Services
              provided.
            </p>
            <p>2.2 The roles of the parties are as follows:</p>
            <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
              <li>
                The Controller determines the purpose and means of Personal Data
                processing.
              </li>
              <li>
                The Processor processes Personal Data only as instructed by the
                Controller.
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Processor Obligations */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            3. Processor Obligations
          </h2>
          <p>Nexus Botix agrees to:</p>
          <div className="gap-8 flex flex-col">
            {processorObligations.map((obligation, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`3.${index + 1} ${
                  obligation.title
                }`}</h3>
                <p>{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Controller Obligations */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            4. Controller Obligations
          </h2>
          <p>The Controller agrees to:</p>
          <div className="gap-8 flex flex-col">
            {controllerObligations.map((obligation, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`4.${index + 1} ${
                  obligation.title
                }`}</h3>
                <p>{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Sub-Processors */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">5. Sub-Processors</h2>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">5.1 Approval Process</h3>
            <p>
              Nexus Botix will maintain an updated list of sub-processors used
              for providing Services and will notify the Controller before
              adding or replacing sub-processors.
            </p>
            <h3 className="text-xl font-semibold">5.2 Liability</h3>
            <p>
              Nexus Botix remains fully responsible for the performance of
              sub-processors in relation to their data protection obligations.
            </p>
          </div>
        </div>

        {/* 6. International Data Transfers */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            6. International Data Transfers
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              6.1 Personal Data may be transferred to and stored in
              jurisdictions outside the European Economic Area (EEA) or other
              countries with strict data protection laws.
            </p>
            <p>
              6.2 Nexus Botix will ensure that such transfers comply with
              applicable data protection laws by implementing appropriate
              safeguards, including:
            </p>
            <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
              <li>EU Standard Contractual Clauses (SCCs);</li>
              <li>Binding Corporate Rules (BCRs);</li>
              <li>
                Approved certifications, codes of conduct, or other mechanisms.
              </li>
            </ul>
          </div>
        </div>

        {/* 7. Security Measures */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">7. Security Measures</h2>
          <p>
            Nexus Botix shall implement and maintain appropriate technical and
            organizational measures to ensure the security of Personal Data,
            including:
          </p>
          <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
            <li>Data encryption during transmission and storage;</li>
            <li>Access controls and user authentication mechanisms;</li>
            <li>
              Regular security assessments, audits, and penetration testing;
            </li>
            <li>
              Policies to detect, prevent, and respond to security incidents.
            </li>
          </ul>
        </div>

        {/* 8. Audit and Inspection Rights */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            8. Audit and Inspection Rights
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              8.1 The Controller may audit Nexus Botix's compliance with this
              DPA up to once per year or as required by applicable data
              protection laws.
            </p>
            <p>
              8.2 Nexus Botix will provide all necessary information and access
              to demonstrate compliance with this DPA.
            </p>
            <p>
              8.3 Any audit must be conducted during regular business hours,
              with reasonable advance notice, and shall not interfere with Nexus
              Botix's operations.
            </p>
          </div>
        </div>

        {/* 9. Data Retention and Deletion */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            9. Data Retention and Deletion
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              9.1 Nexus Botix will retain Personal Data only for as long as
              necessary to provide the Services or comply with legal
              obligations.
            </p>
            <p>
              9.2 Upon termination of the Services or at the Controller's
              written request, Nexus Botix will delete or return all Personal
              Data unless retention is required by law.
            </p>
          </div>
        </div>

        {/* 10. Data Breach Notification */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            10. Data Breach Notification
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              10.1 Nexus Botix will notify the Controller without undue delay
              upon becoming aware of a Personal Data breach.
            </p>
            <p>10.2 The notification will include:</p>
            <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
              <li>The nature of the breach;</li>
              <li>
                Categories and approximate number of affected Data Subjects;
              </li>
              <li>Measures taken or proposed to mitigate the breach.</li>
            </ul>
          </div>
        </div>

        {/* 11. Liability and Indemnification */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            11. Liability and Indemnification
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              11.1 Each party shall be liable for damages caused by
              non-compliance with its obligations under this DPA and applicable
              data protection laws.
            </p>
            <p>
              11.2 The Processor shall indemnify the Controller against losses
              resulting from any breach of this DPA caused by the Processor's
              negligence or willful misconduct.
            </p>
          </div>
        </div>

        {/* 12. Termination */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">12. Termination</h2>
          <div className="flex flex-col gap-3">
            <p>
              12.1 This DPA will remain in effect as long as Nexus Botix
              processes Personal Data on behalf of the Controller.
            </p>
            <p>
              12.2 Upon termination of the main agreement, this DPA will
              automatically terminate.
            </p>
          </div>
        </div>

        {/* 13. Governing Law */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">13. Governing Law</h2>
          <p>
            This DPA is governed by the laws specified in the main agreement
            between the parties.
          </p>
        </div>

        {/* 14. Entire Agreement */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">14. Entire Agreement</h2>
          <p>
            This DPA constitutes the entire agreement between the parties
            regarding the processing of Personal Data and supersedes any prior
            agreements.
          </p>
        </div>

        {/* 15. Contact Information */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10 pb-5 border-b">
          <h2 className="font-semibold ~text-xl/2xl">
            15. Contact Information
          </h2>
          <p>
            For any questions or concerns regarding this DPA, please contact:
          </p>
          <p>Nexus Botix Privacy Team</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@nexusbotix.com">hello@nexusbotix.com</a>
          </p>
        </div>

        <div className="flex flex-col gap-5 pt-10 pb-5">
          <p>
            By entering into this DPA, the Controller and Processor agree to
            comply with its terms and applicable data protection laws.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
