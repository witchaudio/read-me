"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { FiCopy, FiCheck, FiDownload } from 'react-icons/fi';
import gfm from 'remark-gfm';
import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';



export default function Generator() {
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);


  const loadTemplate = async (filename:any) => {
    try {
      const response = await fetch(`/templates/${filename}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error("Could not load the template: ", error);
      setContent("Failed to load the template.");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert back after 2 seconds
  };
  

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  mermaid.initialize({
    startOnLoad: true,
    theme: 'dark', // or 'default' if you prefer
  });




  return (
    <div className="flex h-screen text-white pt-2"> 
      {/* Button Section */}
      <aside className="w-1/6 p-4 overflow-y-auto pt-16">
        <div className="flex flex-col space-y-4">
          <Button
            onClick={() => loadTemplate('theme1.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
            Default Project
          </Button>
          <Button
            onClick={() => loadTemplate('ProfileReadMe.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
            About Me
          </Button>
          <Button
            onClick={() => loadTemplate('designer.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
           Basic Designer
          </Button>
          <Button
            onClick={() => loadTemplate('tables.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
           Tables
          </Button>
          <Button
            onClick={() => loadTemplate('htmlentities.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
           HTML Entities
          </Button>
          
          <Button
            onClick={() => loadTemplate('stats.md')}
            className="w-full bg-black-700 hover:bg-white-700 focus-visible:ring-gray-950"
            variant="outline"
          >
           Just Stats
          </Button>
          {/* <Button className="w-full" variant="outline">
            + Custom Section
          </Button> */}
        </div>
      </aside>

      {/* Textarea Section with Copy Button */}
      <section className="w-2/5 bg-black p-4 rounded-lg flex flex-col">

        <div className="flex justify-end mb-2">
        <button 
      onClick={handleCopyToClipboard} 
      className={`p-2 rounded-lg transition duration-300 ease-in-out ${copied ? 'text-green-500' : 'text-white'}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
    </button>
          <Button onClick={handleDownload}>
            <FiDownload size={20} />
            </Button>
        </div>
        <Textarea
          className="h-full w-full text-white bg-transparent resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="## Optimizations\n\nWhat optimizations did you make in your code? E.g. refactors, performance improvements, accessibility"
        />
      </section>
      {/* Preview Section */}
      <aside className="w-2/5 bg-black p-4 overflow-y-auto pt-10">

        <div className="space-y-4">
          <ReactMarkdown remarkPlugins={[gfm]} className="markdown-preview">{content}</ReactMarkdown>
        </div>
      </aside>
    </div>
  );
}
