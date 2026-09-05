/* Signal Desk design: asymmetric workbench, lime signal states, checkerboard transparency, precise editorial labels. */
import { useCallback, useRef, useState } from "react";
import { removeBackground } from "@imgly/background-removal";
import { ArrowDownToLine, Check, FileImage, ImagePlus, Loader2, LockKeyhole, RotateCcw, ScanLine, ShieldCheck, Sparkles, UploadCloud, X } from "lucide-react";

const LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='10' y='10' width='42' height='42' fill='%23f4f2ec' stroke='%23151515' stroke-width='4'/%3E%3Cpath d='M10 24h12v12' fill='none' stroke='%23151515' stroke-width='4'/%3E%3Cpath d='M42 10h10v10' fill='none' stroke='%23151515' stroke-width='4'/%3E%3Cpath d='M42 10l10 10H42z' fill='%23d7f94b'/%3E%3C/svg%3E";
const HERO_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23e5e2d8'/%3E%3Ccircle cx='190' cy='190' r='72' fill='%232f53a4'/%3E%3Cpath d='M130 170 Q190 90 250 170 L235 290 Q190 330 145 290z' fill='%232f53a4'/%3E%3Ccircle cx='505' cy='185' r='60' fill='%23ee4d56'/%3E%3Cpath d='M465 245 Q505 210 545 245 L555 310 Q505 350 455 310z' fill='%23ee4d56'/%3E%3Cpath d='M140 380l115-60 64 45-115 60z' fill='%23d7a417'/%3E%3Cpath d='M430 360q45-90 90 0q-45-32-90 0M450 330q-6-75 22-105M478 330q38-63 52-66M470 350q-60-42-92-17' fill='none' stroke='%234f7b3b' stroke-width='14' stroke-linecap='round'/%3E%3C/svg%3E";

type Status = "idle" | "ready" | "processing" | "done" | "error";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [dimensions, setDimensions] = useState("");

  const acceptFile = useCallback((next: File) => {
    if (!next.type.startsWith("image/")) { setError("শুধু JPG, PNG বা WEBP ছবি ব্যবহার করুন।"); setStatus("error"); return; }
    if (next.size > 25 * 1024 * 1024) { setError("ছবির আকার ২৫ MB-এর মধ্যে রাখুন।"); setStatus("error"); return; }
    setError(""); setFile(next); setSourceUrl(URL.createObjectURL(next)); setResultUrl(""); setStatus("ready");
    const img = new Image(); img.onload = () => setDimensions(`${img.naturalWidth} × ${img.naturalHeight} px`); img.src = URL.createObjectURL(next);
  }, []);

  const processImage = async () => {
    if (!file) return;
    setStatus("processing"); setProgress(12); setError("");
    try {
      const result = await removeBackground(file, { progress: (_key, current, total) => setProgress(Math.max(12, Math.min(94, Math.round((current / total) * 82)))) });
      setResultUrl(URL.createObjectURL(result)); setProgress(100); setStatus("done");
    } catch { setError("এই ছবিটি প্রক্রিয়া করা যায়নি। অন্য একটি পরিষ্কার ছবি চেষ্টা করুন।"); setStatus("error"); }
  };

  const reset = () => { setFile(null); setSourceUrl(""); setResultUrl(""); setStatus("idle"); setProgress(0); setError(""); setDimensions(""); if (inputRef.current) inputRef.current.value = ""; };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="HD Cutout home"><img src={LOGO} alt="" /><span>HD <b>CUTOUT</b></span></a>
        <div className="top-meta"><span className="signal-dot" /> <span>BROWSER-FIRST PROCESSING</span><span className="top-divider" /><span>v1.0 / FREE</span></div>
      </header>

      <main id="top" className="workbench">
        <aside className="rail">
          <div className="eyebrow"><span>01</span> IMAGE WORKBENCH</div>
          <h1>Background out.<br /><em>Subject intact.</em></h1>
          <p className="intro">একটি ছবি দিন। আমরা ব্যাকগ্রাউন্ড সরিয়ে দেব—মূল বিষয়, রঙ ও রেজোলিউশন না বদলে।</p>
          <div className="rail-art"><img src={HERO_IMAGE} alt="Objects arranged for a cutout example" /><span className="crop-mark crop-tl" /><span className="crop-mark crop-br" /></div>
          <div className="promise"><ShieldCheck size={17} /><div><strong>NO SUBJECT EDITS</strong><span>আপনার ছবি আপনারই থাকে</span></div></div>
          <div className="rail-footer"><LockKeyhole size={14} /> আপনার ছবি ব্রাউজারেই প্রসেস হয়। সার্ভারে আপলোড করা হয় না।</div>
        </aside>

        <section className="canvas-panel" aria-label="Background removal tool">
          <div className="panel-head"><div><span className="panel-kicker">CUTOUT / 001</span><h2>Drop an image.<br /><span>Keep the details.</span></h2></div><div className="format-chip"><FileImage size={15} /> PNG / TRANSPARENT</div></div>

          {!file && <div className={`dropzone ${dragging ? "is-dragging" : ""}`} onDragOver={(e) => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(e) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) acceptFile(f); }} onClick={() => inputRef.current?.click()} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}>
            <input ref={inputRef} className="file-input" type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => e.target.files?.[0] && acceptFile(e.target.files[0])} />
            <div className="upload-icon"><UploadCloud size={28} strokeWidth={1.5} /></div><strong>Drop your image here</strong><span>or click to browse from your device</span><small>JPG, PNG, WEBP <i>·</i> MAX 25 MB</small>
          </div>}

          {file && <div className="result-area">
            <div className="image-stage">
              {status === "done" ? <div className="compare-grid"><div><span className="stage-label">ORIGINAL</span><img src={sourceUrl} alt="Original upload" /></div><div className="checker"><span className="stage-label">CUTOUT / PNG</span><img src={resultUrl} alt="Background removed result" /></div></div> : <div className="single-preview"><span className="stage-label">{status === "processing" ? "PROCESSING" : "READY TO CUT"}</span><img src={sourceUrl} alt="Selected upload" /></div>}
              {status === "processing" && <div className="processing-overlay"><div className="spinner-ring"><Loader2 size={25} /></div><strong>Mapping the subject…</strong><span>Edges stay sharp. No pixels left behind.</span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div><small>{progress}% / LOCAL PROCESSING</small></div>}
            </div>
            <div className="file-row"><div className="file-info"><div className="mini-file"><ImagePlus size={16} /></div><div><strong>{file.name}</strong><span>{dimensions} <i>·</i> {(file.size / 1024 / 1024).toFixed(1)} MB</span></div></div><button className="icon-button" onClick={reset} aria-label="Remove image"><X size={18} /></button></div>
          </div>}

          {error && <div className="error-note"><X size={16} /> {error}</div>}
          <div className="action-row">{status === "done" ? <><a className="primary-action" href={resultUrl} download={`${file?.name.replace(/\.[^/.]+$/, "") || "cutout"}.png`}><ArrowDownToLine size={18} /> DOWNLOAD HD PNG</a><button className="secondary-action" onClick={reset}><RotateCcw size={16} /> NEW IMAGE</button></> : <button className="primary-action" disabled={!file || status === "processing"} onClick={processImage}>{status === "processing" ? <><Loader2 className="spin" size={18} /> REMOVING BACKGROUND…</> : <><Sparkles size={17} /> REMOVE BACKGROUND</>}</button>}</div>
          <div className="panel-note"><ScanLine size={15} /><span>Original dimensions preserved where possible. Output is a transparent PNG with clean alpha edges.</span></div>
        </section>
      </main>

      <section className="proof-strip"><div><b>01</b><strong>UPLOAD</strong><span>Choose any image</span></div><div className="proof-line" /><div><b>02</b><strong>REMOVE</strong><span>Runs on your device</span></div><div className="proof-line" /><div><b>03</b><strong>EXPORT</strong><span>Download transparent HD</span></div></section>
      <footer><span>HD CUTOUT / FREE IMAGE UTILITY</span><span>BUILT FOR CREATORS WHO KEEP THE DETAILS</span></footer>
    </div>
  );
}
