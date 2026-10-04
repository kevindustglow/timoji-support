# timoji · Studio Kí.

可直接部署至 GitHub Pages 的靜態 mini-site。首頁、Privacy Policy 與 Support 共用一份 CSS，無 JavaScript、外部字體、analytics、表單或網站自行設定的 cookies。

## 檔案

```text
timoji-support/
├── index.html
├── index-zh-Hant.html
├── privacy.html
├── privacy-zh-Hant.html
├── support.html
├── support-zh-Hant.html
├── styles.css
├── .nojekyll
├── README.md
└── assets/
    ├── timoji-wordmark.svg
    ├── timoji-mark.svg
    └── timoji-mark.png
```

SVG 是現有 timoji 品牌資產；PNG 作為 favicon 的相容備用。系統字體不需下載。

## 用 GitHub 網頁維護與部署

此 repo 已建立並部署。日常更新不需要重新建立 repo 或上傳舊 ZIP。

1. 編輯需要更新的檔案；兩個語系的相同內容一起維護。
2. 使用 **Preview** 核對 Markdown 或頁面內容，再選 **Commit changes** 提交到 `main`。
3. 到 **Actions** 確認 Pages 部署成功，再開啟正式網址核對更新。Commit 成功與網站部署成功是不同步驟。
4. 檢查英／繁中六個頁面、同頁語言切換、品牌圖與聯絡信箱連結。

部署位置為 repo 根目錄；`index.html` 不要再包一層資料夾。若需要核對 Pages 設定，查看 **Settings → Pages → Build and deployment**：Source 為 **Deploy from a branch**，Branch 為 **main**，Folder 為 **/(root)**。設定與部署方式參考 [GitHub 官方發布說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

`.nojekyll` 是隱藏檔；Finder 可用 `⌘⇧.` 顯示。此網站不需要 Jekyll、額外網域或其他主機服務。

## App Store Connect 網址

以下是本 repo 的正式網址；各語系使用對應頁面。

| 欄位 | English (U.S.) | 繁體中文 |
| --- | --- | --- |
| Privacy Policy URL | https://kevindustglow.github.io/timoji-support/privacy.html | https://kevindustglow.github.io/timoji-support/privacy-zh-Hant.html |
| Support URL | https://kevindustglow.github.io/timoji-support/support.html | https://kevindustglow.github.io/timoji-support/support-zh-Hant.html |
| Marketing URL（選填） | https://kevindustglow.github.io/timoji-support/index.html | https://kevindustglow.github.io/timoji-support/index-zh-Hant.html |

Privacy URL 填在 App 的 **App Privacy**；Support URL 填在 iOS 版本對應欄位。[Apple Privacy 欄位說明](https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy/)、[Apple Support 欄位說明](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/)。

## 隱私內容依據與維護

App 部分依目前 timoji 1.5.1 的隱私文件與 App 內 `PrivacyPolicyContent` 撰寫；客服收發與一般已結案信件保留一年，依 Kevin 提供的營運規則。此網站另外揭露 GitHub Pages 主機記錄訪客 IP 的行為，沒有把網站主機資料和 App 本機資料混為一談。[GitHub Pages 資料收集說明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)。

營運者：Chiang Chien Chu (Studio Kí.)，Taiwan。Privacy / Support：kevin926@me.com。App 品牌統一寫作 `timoji`；Studio Kí. 的 `í` 使用 Unicode U+00ED。檔名、路徑與程式識別名稱保留實際大小寫。

日後變更 App 資料行為、客服流程、主機或新增服務時，請同步更新 `privacy.html`、`privacy-zh-Hant.html` 與更新日期，並同步核對 App 內 policy 和 App Store Connect 的 App Privacy 回覆。本文沒有宣稱全面法規合規或保證 Apple 審核通過。

修改檔案並提交到 `main` 後，Pages 會重新發布；以 Actions 和正式 URL 驗證更新結果。

首頁 wordmark 依 Kevin 指定，直接匯出自 [Figma node 1213:182](https://www.figma.com/design/QJeLxafFi1FOKN75MOO5EI/timoji?node-id=1213-182)，保留原始向量與比例。

## 繁中在地化

首頁、支援、隱私權各有 `-zh-Hant.html` 對應頁。頁首可切換同一頁的語言，繁中內部連結保持語系，原英文網址不變。兩個語系的隱私權內容應同步維護。
