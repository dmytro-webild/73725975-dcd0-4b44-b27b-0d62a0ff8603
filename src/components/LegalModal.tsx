import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';

interface LegalModalProps {
  isOpen: boolean;
  type: 'imprint' | 'privacy' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  const { t } = useLanguage();
  if (!isOpen || !type) return null;

  const content = type === 'imprint' ? t.legalModal.imprintContent : t.legalModal.privacyContent;
  const title = type === 'imprint' ? t.legalModal.imprintTitle : t.legalModal.privacyTitle;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-background/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-card border border-border/80 p-6 sm:p-8 lg:p-10 text-foreground overflow-hidden my-auto shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border/40 mb-6">
            <div className="flex items-center gap-2">
              {type === 'imprint' ? (
                <FileText className="size-5 text-primary" />
              ) : (
                <ShieldCheck className="size-5 text-emerald-400" />
              )}
              <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)]">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-foreground/60 hover:text-foreground hover:bg-muted border border-border/40 transition-all cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-sm leading-relaxed text-foreground/80 max-h-[60vh] overflow-y-auto pr-2 font-sans">
            {'company' in content ? (
              // Imprint content
              <>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">
                  {content.heading}
                </p>

                <div className="p-4 bg-muted/40 border border-border/40 font-mono text-xs space-y-1">
                  <div className="font-bold text-foreground text-sm">{content.company}</div>
                  <div>{content.location}</div>
                  <div className="text-foreground/60 mt-1">{content.appointment}</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                    {content.contactHeader}
                  </h4>
                  <p>{content.email}</p>
                  <p>{content.instagram}</p>
                  <p>{content.whatsapp}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                    {content.repHeader}
                  </h4>
                  <p>{content.repText}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border/40">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                    {content.disclaimerHeader}
                  </h4>
                  <p className="text-xs text-foreground/70">{content.disclaimerText}</p>
                </div>
              </>
            ) : (
              // Privacy content
              <>
                <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  {content.heading}
                </p>

                <p>{content.intro}</p>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                    {content.collectionHeader}
                  </h4>
                  <p className="text-xs text-foreground/70">{content.collectionText}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border/40">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                    {content.rightsHeader}
                  </h4>
                  <p className="text-xs text-foreground/70">{content.rightsText}</p>
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="pt-6 border-t border-border/40 flex justify-end mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold"
            >
              {t.legalModal.close}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
