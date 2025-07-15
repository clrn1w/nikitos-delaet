type PopupButton = {
    id?: string
    type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'
    text?: string
}

interface PopupParams {
    title?: string
    message: string
    buttons?: PopupButton[]
}

interface SettingsButton {
    show(): SettingsButton
    hide(): SettingsButton
    onClick(callback: () => void): SettingsButton
    offClick(callback: () => void): SettingsButton
    isVisible: boolean
}

interface HapticFeedback {
    impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): () => void
    notificationOccurred(type: 'error' | 'success' | 'warning'): () => void
    selectionChanged(): void
}

interface WebAppUser {
    id: number
    is_bot?: boolean
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
    is_premium?: true
    added_to_attachment_menu?: true
    allows_write_to_pm?: true
    photo_url?: string
}

interface WebAppChat {
    id: number
    type: 'group' | 'supergroup' | 'channel'
    title: string
    username?: string
    photo_url?: string
}

interface WebAppInitData {
    query_id?: string
    user?: WebAppUser
    receiver?: WebAppUser
    chat?: WebAppChat
    chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel'
    chat_instance?: string
    start_param?: string
    can_send_after?: number
    auth_date: number
    hash: string
}

interface BackButton {
    show(): void
    hide(): void
    onClick(callback: () => void): BackButton
    offClick(callback: () => void): BackButton
    isVisible: boolean
}

interface MainButtonParams {
    text?: string
    color?: string
    text_color?: string
    has_shine_effect?: boolean
    position?: 'left' | 'right' | 'top' | 'bottom'
    is_active?: boolean
    is_visible?: boolean
}

interface BottomButton {
    show(): BottomButton
    hide(): BottomButton
    onClick(callback: () => void): BottomButton
    offClick(callback: () => void): BottomButton
    setText(text: string): BottomButton
    enable(): BottomButton
    disable(): BottomButton
    showProgress(leaveActive?: boolean): BottomButton
    hideProgress(): BottomButton
    setParams(params: MainButtonParams): BottomButton
    isVisible: boolean
    isActive: boolean
    isProgressVisible: boolean
    text: string
    color: string
    textColor: string
    hasShineEffect: boolean
    position?: 'left' | 'right' | 'top' | 'bottom'
}

export enum TelegramPlatform {
    Desktop = 'tdesktop',
    iOS = 'ios',
    Android = 'android',
    Web = 'web',
    Unknown = 'unknown',
}

export interface WebApp {
    ready(): void
    expand(): void
    close(): void
    requestFullscreen(): void
    disableVerticalSwipes(): void
    exitFullscreen(): void
    lockOrientation(): void
    unlockOrientation(): void
    showAlert(message: string, callback?: () => void): void
    showConfirm(message: string, callback?: (ok: boolean) => void): void
    showPopup(params: PopupParams, callback?: (button_id: string) => void): void
    setHeaderColor(color: string): void

    BackButton: BackButton
    MainButton: BottomButton
    SecondaryButton: BottomButton
    SettingsButton: SettingsButton
    HapticFeedback: HapticFeedback

    initData: string
    initDataUnsafe: WebAppInitData
    isFullscreen: boolean
    isOrientationLocked: boolean
    platform: TelegramPlatform
    colorScheme: 'light' | 'dark'
}

declare global {
    interface Window {
        Telegram: {
            WebApp: WebApp
        }
    }
}
