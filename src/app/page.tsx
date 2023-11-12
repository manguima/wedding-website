"use client";
import { Container, Flex } from "@mantine/core";
import { HeaderSection } from "@/components/HomePage/HeaderSection";
import { AboutUsSection } from "@/components/HomePage/AboutUsSection";
import { CountdownSection } from "@/components/HomePage/CountdownSection";
import { useRef, useState } from "react";
import { useStickyroll } from "@stickyroll/react";
import { Metadata } from "next";

interface ProgressPageProps {
  pageIndex: number;
  pages: number;
  progress: number;
  totalProgress: number;
  currentPage: number;
}

export default function Home() {
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [progress, setProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);

  const pageSections: React.FC<ProgressPageProps>[] = [
    HeaderSection,
    AboutUsSection,
    CountdownSection,
  ];

  const pagesCount = pageSections.length;

  const stickyrollRef = useRef(null);
  useStickyroll(stickyrollRef, {
    pages: pagesCount,
    factor: 1,

    onProgress: (progress, page, index) => {
      setProgress(progress);
      setTotalProgress(index + progress);
    },
    onPage: (page, index) => {
      setPage(page);
      setCurrentPage(index);
    },
  });

  return (
    <div ref={stickyrollRef}>
      {pageSections.map((PageSection, index) => {
        return (
          <PageSection
            pageIndex={index}
            currentPage={currentPage}
            pages={pagesCount}
            progress={progress}
            totalProgress={totalProgress}
          />
        );
      })}
    </div>
  );
}
