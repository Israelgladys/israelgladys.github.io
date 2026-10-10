window.PROJECTS = [
  {
    "name": "REA — Reverse Engineer Anything",
    "url": "https://github.com/morluto/rea",
    "summary": "AIエージェントと連携し、アプリや実行ファイルの内部構造・動作を解析できるリバースエンジニアリングツール。",
    "description": "REAは、ソースコードが公開されていないアプリや実行ファイルの仕組みを調査するためのMITライセンスのツール。Claude CodeやCodexなどのAIエージェントとMCP経由で連携し、JavaScript・Electron製アプリ、Webサイト、ネイティブバイナリなどの内部構造や処理の流れを解析できる。公式事例にはNotionのコピー処理の追跡、Chromeの恐竜ゲーム由来のブラウザ版の加速処理の調査と速度調整機能付きの再現、Windows電卓の「%」ボタンの計算処理の調査と再現があり、解析結果をもとにAIエージェントが類似機能を実装する用途を想定している。REAはAIエージェントに解析手段を提供する仕組みで、ネイティブバイナリの詳細解析にはGhidra・Hopper・IDAのいずれかが必要。",
    "category": "開発ツール",
    "tags": [
      "AIエージェント",
      "リバースエンジニアリング",
      "MCP",
      "MIT"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/morluto/rea/blob/main/README.md"
      },
      {
        "label": "公式サイト",
        "url": "https://rea.tools/"
      },
      {
        "label": "公式事例集",
        "url": "https://rea.tools/showcase/"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/morluto/rea/blob/main/LICENSE"
      }
    ]
  },
  {
    "name": "mcopt — Minecraft Optimization for Apple Silicon",
    "url": "https://github.com/noahdunnagan/mcopt",
    "summary": "Apple Silicon搭載Macで、Minecraftの描画処理をMetalに置き換え、動作の高速化を目指す最適化MOD。",
    "description": "mcoptは、Apple Silicon搭載MacでMinecraft Java Editionをより滑らかに動かすために、OpenGLベースのワールド描画を独自のMetalレンダラーに置き換えるパフォーマンス改善MOD。Apache License 2.0で公開され、macOS 26以降、Java 25、Minecraft 26.3、Fabric Loader 0.19.5以降に対応し、描画APIはMetal 3を利用する。公式READMEの測定では、Mac mini M4（10コアGPU・16 GB）、1920×1080、描画距離16、VSync無効の同一ワールドで、旋回時の通常版156 FPSに対しmcopt 0.3.0-alpha.1は1209〜1211 FPSだったが、すべての環境で同等の向上を保証する数値ではない。最新リリースは0.3.0-alpha.2のAlpha版で、バグに備えて導入前のワールドのバックアップが推奨され、Sodiumは不要かつ併用不可で、Sodium依存のMODやOpenGLを直接呼ぶMODにも互換性の制約がある。",
    "category": "ゲーム",
    "tags": [
      "パフォーマンス最適化",
      "macOS",
      "Apple Silicon",
      "Minecraft",
      "Metal",
      "Fabric",
      "Alpha",
      "Apache-2.0"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/noahdunnagan/mcopt/blob/main/README.md"
      },
      {
        "label": "公式リリース v0.3.0-alpha.2",
        "url": "https://github.com/noahdunnagan/mcopt/releases/tag/v0.3.0-alpha.2"
      }
    ]
  }
];
