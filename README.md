# Weather Sample App

## 概要
天気情報を[Weatherbit.io](https://www.weatherbit.io/)のAPIより取得して表示するWebフロントアプリです。
***

## 主要ディレクトリ構造
```
weather_app
├─ .gitignore
├─ Dockerfile
├─ app
│  └─ weather_sample
│     ├─ .env
│     ├─ public 
│     ├─ src
│     │  ├─ App.css
│     │  ├─ App.tsx
│     │  ├─ components
│     │  │  ├─ fields    //画面パーツのまとまり
│     │  │  │  └─ WeatherInfo.tsx
│     │  │  ├─ pages    //ページ単位で拡張していく場合
│     │  │  │  └─ BasePage.tsx
│     │  │  └─ parts    //画面パーツ類など
│     │  │     ├─ BaseInput.tsx
│     │  │     ├─ Headline1.tsx
│     │  │     ├─ SearchButton.tsx
│     │  │     ├─ SlideNextButton.tsx
│     │  │     └─ SlidePrevButton.tsx
│     │  ├─ index.css
│     │  ├─ index.tsx
│     │  └─ types    //共通の型定義
│     │     └─ base.ts
│     └─ tsconfig.json
└─ docker-compose.yml

```

***
## 補足
* Dockerから環境構築する場合はgit clone等でアプリケーション部分を設置下さい。
* 以下URLよりビルドしたものを確認できます
  
  https://weather-sample.pages.dev/


