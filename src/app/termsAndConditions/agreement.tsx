import React from "react";

export interface LegalSection {
  title: string;
  content?: {
    type: "paragraph" | "bullet" | "numbered" | "table";
    value: string | string[][]; // string[][] for tables
  }[];
  subsections: {
    number: string;
    subtitle: string;
    content: {
      type: "paragraph" | "bullet" | "numbered" | "table";
      value: string | string[][]; // string[][] for tables
    }[];
  }[];
}

interface LegalDocumentProps {
  header: string;
  sections: LegalSection[];
}

const renderTable = (table: string[][], key: number) => {
  if (table.length === 0) return null;

  const [header, ...body] = table;

  return (
    <table key={key} className="w-full  text-left mb-4">
      <thead className="bg-gray-100">
        <tr>
          {header.map((cell, colIndex) => (
            <th key={colIndex} className="border border-[var(--secondary-100)] px-4 py-6 text-sm text-center font-bold">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} className="border border-[var(--secondary-100)] px-4 py-6 text-sm">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const LegalDocument: React.FC<LegalDocumentProps> = ({ sections }) => {
  return (
    <div className="text-gray-800 font-sans">
      {sections.map((section, i) => (
        <div key={i} className="mb-10">
          <p className=" font-bold  mb-4">{section.title}</p>

          {section.content?.map((item, k) => {
            if (item.type === "paragraph" && typeof item.value === "string") {
              const paragraphs = item.value.split("\n\n");
              return (
                <div key={k} className="mb-2 space-y-3">
                  {paragraphs.map((para, idx) => (
                    <p key={idx} className="text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              );
            }

            if (item.type === "bullet" && Array.isArray(item.value)) {
              return (
                <ul key={k} className="list-disc ml-6 mb-2">
                  {(item.value as string[][]).map((pointArr, idx) => (
                    <li key={idx}>{pointArr[0]}</li>
                  ))}
                </ul>
              );
            }

            if (item.type === "numbered" && Array.isArray(item.value)) {
              return (
                <ol key={k} className="list-decimal ml-6 mb-2">
                  {(item.value as string[][]).map((pointArr, idx) => (
                    <li key={idx}>{pointArr[0]}</li>
                  ))}
                </ol>
              );
            }

            if (item.type === "table" && Array.isArray(item.value)) {
              return renderTable(item.value as string[][], k);
            }

            return null;
          })}

          {section.subsections.map((sub, j) => (
            <div key={j} className="mb-6">
              <p className="text-lg text-[var(--primary-color)] font-bold mb-2">
                {sub.number} {sub.subtitle}
              </p>

              {sub.content.map((item, k) => {
                if (item.type === "paragraph" && typeof item.value === "string") {
                  const paragraphs = item.value.split("\n\n");
                  return (
                    <div key={k} className="mb-2 space-y-3">
                      {paragraphs.map((para, idx) => (
                        <p key={idx} className="text-sm leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  );
                }

                if (item.type === "bullet" && Array.isArray(item.value)) {
                  return (
                    <ul key={k} className="list-disc ml-6 mb-2">
                      {(item.value as string[][]).map((pointArr, idx) => (
                        <li key={idx}>{pointArr[0]}</li>
                      ))}
                    </ul>
                  );
                }

                if (item.type === "numbered" && Array.isArray(item.value)) {
                  return (
                    <ol key={k} className="list-decimal ml-6 mb-2">
                      {(item.value as string[][]).map((pointArr, idx) => (
                        <li key={idx}>{pointArr[0]}</li>
                      ))}
                    </ol>
                  );
                }

                if (item.type === "table" && Array.isArray(item.value)) {
                  return renderTable(item.value as string[][], k);
                }

                return null;
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LegalDocument;