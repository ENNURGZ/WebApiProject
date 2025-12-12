# 🔐 Web API + React (Vite) Authentication Project

Bu proje, **ASP.NET Core Web API** ve **React (Vite + TypeScript)** kullanılarak geliştirilmiş,  
**JWT (JSON Web Token) tabanlı kullanıcı kayıt ve giriş (Authentication)** sistemi içeren modern bir **full-stack uygulamadır**.

Projenin amacı; **Entity Framework Core** ve **ASP.NET Identity** kullanarak **hiçbir SQL sorgusu yazmadan** güvenli bir kimlik doğrulama altyapısı kurmak ve bu altyapıyı React frontend üzerinden kullanmaktır.

---

## 🎯 Proje Amaçları

- JWT tabanlı authentication mantığını uygulamak  
- ASP.NET Identity ile kullanıcı yönetimi sağlamak  
- ORM yaklaşımıyla veritabanı işlemlerini yönetmek  
- Backend ve frontend arasındaki HTTP iletişimini kurmak  
- Modern ve sürdürülebilir bir full-stack mimari oluşturmak  

---

## 🧩 Kullanılan Teknolojiler

### Backend
- ASP.NET Core Web API  
- Entity Framework Core (ORM)  
- ASP.NET Identity  
- JWT (JSON Web Token)  
- SQLite  
- Swagger  

### Frontend
- React  
- TypeScript  
- Vite  
- Axios  
- React Router DOM  


---

## ⚙️ Backend Kurulumu (ASP.NET Web API)

```bash
mkdir WebApi
cd WebApi
dotnet new webapi
```

---

## 📦 Gerekli NuGet Paketleri

```bash
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 9.0.10
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 9.0.1
dotnet add package System.IdentityModel.Tokens.Jwt
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.10
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.10
dotnet add package Swashbuckle.AspNetCore --version 9.0.1
```

---

## 🔑 JWT (JSON Web Token)

JWT, kullanıcının kimliğini ve yetkilerini taşıyan dijital bir güvenlik anahtarıdır.  
Token olmadan kullanıcı doğrulaması ve yetkilendirme yapılamaz.

---

## 🗄️ Veritabanı ve Identity

- SQLite kullanılmıştır  
- AppDbContext, IdentityDbContext<AppUser> sınıfından türetilmiştir  
- Identity tabloları otomatik oluşturulur  

---

## 🌐 CORS Yapılandırması

```csharp
policy.WithOrigins("http://localhost:5173")
      .AllowAnyHeader()
      .AllowAnyMethod();
```

---

## 🗃️ Migration ve Veritabanı

```bash
dotnet ef migrations add IdentityInit
dotnet ef database update
```

---

## 🎨 Frontend Kurulumu

```bash
npm create vite@latest WebFrontend -- --template react-ts
npm install axios react-router-dom
```

---

## ▶️ Çalıştırma

### Backend
```bash
dotnet run
```

### Frontend
```bash
npm  install
npm run dev
```

---

## 👤 

Bu proje, full-stack authentication altyapısını öğrenmek amacıyla geliştirilmiştir.
