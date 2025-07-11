"use client";
import React from "react";
import TechStackCard from "./TechStackCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import techStack from "@/app/data/TechStack";
import { motion } from "framer-motion";

const TechStackSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">Stack Symphony</h2>
        </motion.div>

        <div className="hidden md:block space-y-8">
          {techStack.map((group, index) => (
            <motion.div
              key={`desktop-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white ">
                {group.category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.tools.map((tool, i) => (
                  <TechStackCard
                    key={`${tool.name}-${i}`}
                    name={tool.name}
                    context={tool.context}
                    status={tool.status}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion - Visible on mobile */}
        <div className="md:hidden">
          <Accordion type="single" collapsible>
            {techStack.map((group, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left text-neutral-900 dark:text-slate-100 hover:no-underline">
                  {group.category}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="grid gap-4">
                    {group.tools.map((tool, i) => (
                      <TechStackCard
                        key={`${tool.name}-${i}`}
                        name={tool.name}
                        context={tool.context}
                        status={tool.status}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;