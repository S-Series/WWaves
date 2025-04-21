export function cleanText(text) {
  const ocrCorrections = {
    SEER: '크리티컬',
    SEEP: '크리티컬피해',
    '32EZmay': '크리티컬피해',
    '22EIH': '강공격피해보너스',
    PUB: '공격력',
    BEY: '공격력',
    HHP: 'HP',
    레비y: 'HP',
    oly: '방어력',
    gol: '방어력',
    Coola: '방어력',
    '3HUL': '공명효율'
  };

  return (
    text
      .split('\n')
      .map((line) => {
        let cleaned = line.replace(/[^0-9a-zA-Z가-힣.%]/g, '');
        for (let wrong in ocrCorrections) {
          if (cleaned.includes(wrong)) {
            cleaned = cleaned.replaceAll(wrong, ocrCorrections[wrong]);
          }
        }
        return cleaned;
      })
      //.filter(line => line.trim().length > 0)
      .join('\n')
  );
}
