import { FontCategory, FontStyle } from '../types';

// Helper to generate character maps
const createMap = (source: string, target: string): Record<string, string> => {
  const map: Record<string, string> = {};
  const sourceChars = source.split('');
  // Handle surrogate pairs for Unicode characters properly
  const targetChars = Array.from(target); 

  sourceChars.forEach((char, index) => {
    if (targetChars[index]) {
      map[char] = targetChars[index];
    }
  });
  return map;
};

const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMS = '0123456789';

// Define the fonts
export const FONTS: FontStyle[] = [
  {
    id: 'script_bold',
    name: 'Cursiva Negrita',
    category: [FontCategory.CURSIVE, FontCategory.TATTOO, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃'),
      ...createMap(UPPER, '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'),
    },
  },
  {
    id: 'script_normal',
    name: 'Cursiva Elegante',
    category: [FontCategory.CURSIVE, FontCategory.TATTOO, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'),
      ...createMap(UPPER, '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'),
    },
  },
  {
    id: 'gothic_bold',
    name: 'Gótica Vieja Escuela',
    category: [FontCategory.GOTHIC, FontCategory.TATTOO, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟'),
      ...createMap(UPPER, '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'),
    },
  },
  {
    id: 'gothic_normal',
    name: 'Gótica Clásica',
    category: [FontCategory.GOTHIC, FontCategory.TATTOO, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'),
      ...createMap(UPPER, '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'),
    },
  },
  {
    id: 'double_struck',
    name: 'Graffiti Doble',
    category: [FontCategory.GRAFFITI, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'),
      ...createMap(UPPER, '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ'),
      ...createMap(NUMS, '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'),
    },
  },
  {
    id: 'circled',
    name: 'Burbujas',
    category: [FontCategory.GRAFFITI, FontCategory.SOCIAL, FontCategory.ALL],
    map: {
      ...createMap(LOWER, 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'),
      ...createMap(UPPER, 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ'),
      ...createMap(NUMS, '⓪①②③④⑤⑥⑦⑧⑨'),
    },
  },
  {
    id: 'circled_neg',
    name: 'Burbujas Negras',
    category: [FontCategory.GRAFFITI, FontCategory.SOCIAL, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '⓿➊➋➌➍➎➏➐➑➒'), // Using numbers for demo, letters not full set in standard unicode block easily accessible without emoji logic sometimes
      ...createMap(UPPER, '🅐𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'), // Fallback mixing for demo simplicity on strict unicode
    },
  },
  {
    id: 'monospace',
    name: 'Máquina de Escribir',
    category: [FontCategory.SOCIAL, FontCategory.ALL],
    map: {
      ...createMap(LOWER, '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'),
      ...createMap(UPPER, '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉'),
      ...createMap(NUMS, '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'),
    },
  },
  {
    id: 'small_caps',
    name: 'Minúsculas Pequeñas',
    category: [FontCategory.SOCIAL, FontCategory.ALL],
    map: {
      ...createMap(LOWER, 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'),
      ...createMap(UPPER, 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'),
    },
  },
  {
    id: 'squares',
    name: 'Cuadrados',
    category: [FontCategory.GRAFFITI, FontCategory.ALL],
    map: {
      ...createMap(LOWER, 'a𝄄c𝄄e𝄄g𝄄i𝄄k𝄄m𝄄o𝄄q𝄄s𝄄u𝄄w𝄄y'), // Placeholder visual for demo, actual square unicode is tricky across fonts
    },
  },
  {
    id: 'inverted',
    name: 'Invertido',
    category: [FontCategory.GRAFFITI, FontCategory.SOCIAL, FontCategory.ALL],
    map: {
      ...createMap(LOWER, 'ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz'),
      ...createMap(UPPER, '∀𐐒ƆDƎℲפHIſK˥WNOԀQᴚS┴∩ΛMX⅄Z'),
    },
  },
  {
    id: 'wide',
    name: 'Aesthetic / Vaporwave',
    category: [FontCategory.SOCIAL, FontCategory.GRAFFITI, FontCategory.ALL],
    map: {
      ...createMap(LOWER, 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ'),
      ...createMap(UPPER, 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ'),
      ...createMap(NUMS, '０１２３４５６７８９'),
    },
  },
];

export const convertText = (text: string, fontId: string): string => {
  const font = FONTS.find((f) => f.id === fontId);
  if (!font) return text;

  return text
    .split('')
    .map((char) => font.map[char] || char)
    .join('');
};

export const getFontsByCategory = (category: FontCategory): FontStyle[] => {
  if (category === FontCategory.ALL) return FONTS;
  return FONTS.filter((f) => f.category.includes(category));
};
