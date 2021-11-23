interface Speakable {
  speak(): void
}
interface SpeakChinese extends Speakable {
  speakChinese(): void
}
class Speak implements SpeakChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.");
  }
  speak(): void {
    throw new Error("Method not implemented.");
  }
}