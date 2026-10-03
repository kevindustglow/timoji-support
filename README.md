# Timoji · Studio Kí.

可直接部署至 GitHub Pages 的靜態 mini-site。首頁、Privacy Policy 與 Support 共用一份 CSS，無 JavaScript、外部字體、analytics、表單或網站自行設定的 cookies。

## 檔案

```text
timoji-support/
├── index.html
├── privacy.html
├── support.html
├── styles.css
├── .nojekyll
├── README.md
└── assets/
    ├── timoji-wordmark.svg
    ├── timoji-mark.svg
    └── timoji-mark.png
```

SVG 是現有 Timoji 品牌資產；PNG 作為 favicon 的相容備用。系統字體不需下載。

## 用 GitHub 網頁部署

1. 登入 GitHub，選右上角 **＋ → New repository**。
2. Repository name 填 `timoji-support`，選 **Public**，勾選 **Add a README file**，建立 repo。App 原始碼繼續放在原本的 private repo。
3. 解壓縮 `timoji-support.zip`。在新 repo 選 **Add file → Upload files**，上傳解壓後資料夾裡的檔案與 `assets` 資料夾，再選 **Commit changes**。
   - `index.html` 必須在 repo 根目錄；不要再包一層 `timoji-support/`。
   - `.nojekyll` 是隱藏檔；Finder 可用 `⌘⇧.` 顯示。此網站沒有需要 Jekyll 處理的內容，若網頁上傳未包含它，其他檔案仍可正常發布。
4. 到 repo 的 **Settings → Pages → Build and deployment**：
   - Source：**Deploy from a branch**
   - Branch：**main**
   - Folder：**/(root)**
   - 選 **Save**。
5. 在 **Actions** 確認 Pages 部署成功，再回到 **Settings → Pages**，以顯示的正式網站網址為準。若可選，啟用 **Enforce HTTPS**。
6. 用未登入 GitHub 的瀏覽器開啟首頁、Privacy 和 Support，確認可直接閱讀、品牌圖正常、信箱連結正確。

GitHub Free 支援 public repo 的 Pages；這些設定依 [GitHub 官方發布說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。不需要購買網域或另外租主機。

## App Store Connect 網址

以下的 `YOUR-USERNAME` 請換成實際 GitHub 帳號。若 repo 名稱不同，路徑也要跟著換。

| 欄位 | 網址格式 |
| --- | --- |
| Privacy Policy URL | `https://YOUR-USERNAME.github.io/timoji-support/privacy.html` |
| Support URL | `https://YOUR-USERNAME.github.io/timoji-support/support.html` |
| Marketing URL（選填） | `https://YOUR-USERNAME.github.io/timoji-support/` |

Privacy URL 填在 App 的 **App Privacy**；Support URL 填在 iOS 版本的 **App Information** 對應欄位。Apple 要求 iOS 的公開 Privacy Policy URL，Support URL 則須提供實際聯絡資訊。[Apple Privacy 欄位說明](https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy/)、[Apple Support 欄位說明](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/)。

## 隱私內容依據與維護

App 部分依目前 timoji 1.5.1 的隱私文件與 App 內 `PrivacyPolicyContent` 撰寫；客服收發與一般已結案信件保留一年，依 Kevin 提供的營運規則。此網站另外揭露 GitHub Pages 主機記錄訪客 IP 的行為，沒有把網站主機資料和 App 本機資料混為一談。[GitHub Pages 資料收集說明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)。

營運者：Chiang Chien Chu (Studio Kí.)，Taiwan。Privacy / Support：kevin926@me.com。品牌名稱一律使用 Unicode `í`（U+00ED）。

日後變更 App 資料行為、客服流程、主機或新增服務時，請更新 `privacy.html` 與更新日期，並同步核對 App 內 policy 和 App Store Connect 的 App Privacy 回覆。本文沒有宣稱全面法規合規或保證 Apple 審核通過。

修改檔案並提交到 `main` 後，Pages 會重新發布；以 Actions 和正式 URL 驗證更新結果。

首頁 wordmark 依 Kevin 指定，直接匯出自 [Figma node 1213:182](https://www.figma.com/design/QJeLxafFi1FOKN75MOO5EI/Timoji?node-id=1213-182)，保留原始向量與比例。

## 繁中在地化

首頁、支援、隱私權各有 `-zh-Hant.html` 對應頁。頁首可切換同一頁的語言，繁中內部連結保持語系，原英文網址不變。兩個語系的隱私權內容應同步維護。
