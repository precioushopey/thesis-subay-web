import { HTMLTemplate } from "@/app/components/utils/insightReport"
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { format } from 'date-fns';

interface ClaimForm {
  [key: string]: any;
}

const createPDF = async (form?: ClaimForm): Promise<void> => {
  const htmlString: string = HTMLTemplate();

  const iframe: HTMLIFrameElement = document.createElement("iframe");
  iframe.style.visibility = "hidden";
  document.body.appendChild(iframe);

  const iframedoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!iframedoc) {
    throw new Error("Unable to access iframe document.");
  }

  iframedoc.body.innerHTML = htmlString;

  const canvas = await html2canvas(iframedoc.body);
  const imgData: string = canvas.toDataURL("image/png");

  document.body.removeChild(iframe);

  const doc = new JsPDF({
    format: "a4",
    unit: "mm",
  });

  doc.addImage(imgData, "PNG", 0, 0, 220, 250);
  doc.save(`insight_report_${Date.now()}.pdf`);
};

export { createPDF };
