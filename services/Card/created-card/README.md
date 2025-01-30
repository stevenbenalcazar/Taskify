### 🚀 **Instalación y Ejecución**

#### 1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/CinthiaDayanara/created-card.git
cd microservicio-tarjetas
```

#### 2️⃣ **Instalar dependencias**
```bash
npm install
```

#### 3️⃣ **Configurar variables de entorno**
Crear un archivo `.env` en la raíz con las credenciales necesarias.

#### 4️⃣ **Ejecutar el servidor**
```bash
npm start
```

#### 5️⃣ **Modo desarrollo con nodemon**
```bash
npm run dev
```

#### 6️⃣ **Ejecutar con Docker**
```bash
docker build -t created-card .
docker run -p 5000:5000 --env-file .env created-card
```
