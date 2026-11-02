export function SkillKeywords({ keywords }: { keywords?: string[] }) {
  if (!keywords) {
    return null;
  }
  return (
    <li>
      <div className="experience-keywords">
        {keywords.map((keyword, index) => (
          <span key={index.toString()} className="tag tag--muted">
            {keyword}
          </span>
        ))}
      </div>
    </li>
  );
}
