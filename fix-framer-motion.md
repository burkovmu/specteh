# Исправление проблемы с framer-motion

Переустановка пакета framer-motion для решения ошибки:
```
Error: ENOENT: no such file or directory, open '/Users/mike/Desktop/specteh/.next/server/vendor-chunks/framer-motion.js'
```

1. Очистка кэша: `rm -rf node_modules/.cache` и `rm -rf .next`
2. Переустановка пакета: `npm install framer-motion`
3. Пересборка проекта: `npm run build`
