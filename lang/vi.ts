export const lang: Language = {
  name: 'Tiếng Việt',
  flag: 'VN',
  key: 'vi_VI',
  tag: ['vi_VI', 'VN', 'vi', 'VI', 'vn', 'Tiếng Việt'],
  dateTimeFormat: 'dd/MM/yyyy HH:mm',
  mapping: {
    // Common key:
    AGO: 'trước',
    GO_BACK: 'Trở lại',
    CREATE_NEW_WALLET: 'Tạo ví mới',
    IMPORT_WALLET: 'Truy cập ví',
    WELCOME: 'Chào mừng đến với Kardia Wallet',
    GETTING_STARTED_DESCRIPTION:
      'Để  bắt đầu, chọn 1 trong các lựa chọn sau đây',
    SUBMIT: 'Xác nhận',
    REQUIRED_FIELD: 'Vui lòng nhập thông tin',
    COPY_TO_CLIPBOARD: 'Copy vào bộ nhớ tạm',
    SECOND: 'giây',
    RESTART_APP_DESCRIPTION:
      'Kardia Wallet sẽ khởi động lại để đảm bảo các thay đổi được cập nhật.',
    ARE_YOU_SURE: 'Bạn chắc chắn muốn thực hiện thao tác này ?',
    SAVE: 'Lưu',
    CLOSE: 'Đóng',
    CONFIRM: 'Xác nhận',
    SCAN_QR_FOR_ADDRESS: 'Quét mã QR chứa địa chỉ ví',
    LATER: 'Để sau',
    SET_APP_PASSCODE: 'Cài đặt mật khẩu',
    NO_PASSCODE: 'Bạn chưa cài mật khẩu cho ví',
    PASSCODE_DESCRIPTION:
      'Mật khẩu ví đảm bảo chỉ có bạn là người sử dụng Kardia Wallet',
    IMPORT_WITH_PRIVATE_KEY: 'Thêm bằng private key',
    IMPORT_WITH_SEED: 'Thêm bằng seed phrase',
    SELECT_ADDRESS: 'Chọn địa chỉ ví',
    NO_SAVED_ADDRESS: 'Chưa có địa chỉ ví được lưu',
    // Create wallet key:
    SUBMIT_CREATE: 'Tôi đã hiểu và đã ghi lại. Truy cập ví',
    MNEMONIC_DESCRIPTION:
      '12 từ trên được dùng để  truy cập cũng như khôi phục lại ví của bạn.',
    // Import wallet key:
    ENTER_SEED_PHRASE: 'Nhập chuỗi từ khóa bí mật',
    ENTER_PRIVATE_KEY: 'Nhập private key',
    SCAN_SEED_PHRASE: 'Quét mã QR chứa chuỗi khóa bí mật',
    SCAN_PRIVATE_KEY: 'Quét mã QR chứa private key',
    WALLET_EXISTED: 'Ví đã tồn tại',
    ERROR_SEED_PHRASE: 'Chuỗi khóa bis mật sai, vui lòng thử lại',
    // Transaction key
    RECENT_TRANSACTION: 'Giao dịch gần đây',
    NO_TRANSACTION: 'Không có giao dịch',
    SEARCH_TRANSACTION_PLACEHOLDER: 'Tìm kiếm...',
    VIEW_ALL_TRANSACTION: 'Tất cả',
    SEND: 'Gửi KAI',
    RECEIVE: 'Nhận KAI',
    TRANSACTION_HASH: 'Mã giao dịch',
    TRANSACTION_DETAIL: 'Chi tiết',
    TRANSACTION_AMOUNT: 'Số lượng',
    TRANSACTION_FEE: 'Phí giao dịch',
    FROM: 'Ví gửi',
    TO: 'Ví nhận',
    TRANSACTION_DATE: 'Ngày giao dịch',
    CREATE_TX_ADDRESS: 'Địa chỉ ví nhận KAI',
    CREATE_TX_KAI_AMOUNT: 'Số lượng (tối đa: 5,000,000,000)',
    TRANSACTION_SPEED: 'Chọn độ ưu tiên',
    SLOW_SPEED: 'Chậm',
    AVERAGE_SPEED: 'Trung bình',
    FAST_SPEED: 'Nhanh',
    GAS_PRICE: 'Giá gas',
    GAS_LIMIT: 'Giới hạn gas',
    SPEED_DESCRIPTION:
      '* Thông thường các giao dịch có giá gas cao hơn sẽ được network ưu tiên xử lý trước. Tuy nhiên điều này còn phụ thuộc vào trạng thái của network tại thời điểm giao dịch.',
    CONFIRM_TRANSACTION: 'Xác nhận giao dịch của bạn',
    CONFIRM_KAI_AMOUNT: 'Số lượng',
    NOT_ENOUGH_KAI_FOR_TX: 'Ví không đủ KAI',
    // Wallet key
    IMPORT: 'Thêm ví',
    WALLET: 'Ví',
    ADDRESS: 'Địa chỉ',
    REMOVE_WALLET: 'Xóa ví',
    // News key
    NEWS_SCREEN_TITLE: 'Tin tức',
    // Staking key
    NO_STAKING_ITEM: 'Bạn chưa stake cho validator nào',
    CLAIMABLE: 'KAI được thưởng',
    STAKED: 'KAI đã stake',
    WITHDRAWABLE: 'KAI có thể rút về ví',
    UNBONDED: 'KAI đang khóa chờ rút',
    CLAIM_REWARD: 'Rút thưởng',
    UNDELEGATE: 'Rút tiền stake',
    WITHDRAW: 'Rút về ví',
    CLAIM_SUCCESS: '{{KAI_AMOUNT}} KAI đã được rút thành công',
    WITHDRAW_SUCCESS: '{{KAI_AMOUNT}} KAI đã được rút về ví',
    UNDELEGATE_SUCCESS:
      '{{KAI_AMOUNT}} KAI đã được rút. Sau 7 ngày bạn có thể rút số KAI này về ví.',
    UNDELEGATE_AMOUNT_TOO_MUCH: 'Số KAI rút phải nhỏ hơn số KAI đã stake',
    UNDELEGATE_AMOUNT_REMAIN_25000:
      'Cần giữ lại ít nhất 25.000 KAI hoặc rút hết KAI.',
    UNDELEGATE_AMOUNT_PLACEHOLDER: 'Số KAI muốn rút từ stake...',
    YOUR_INVESTMENTS: 'Các khoảng đầu tư của bạn',
    TOTAL_EARNING: 'Tổng số lợi nhuận',
    INVEST: 'Đầu tư',
    CHOOSE_VALIDATOR: 'Chọn validator để đầu tư',
    STAKING_AMOUNT: 'Số KAI đầu tư',
    STAKING_AMOUNT_NOT_ENOUGHT: 'Ví hiện tại không đủ KAI',
    AT_LEAST_MIN_DELEGATE: 'Cần đầu tư ít nhất {{MIN_KAI}}',
    DELEGATE: 'Đầu tư',
    ESTIMATED_EARNING: 'Thu nhập ước tính trong 30 ngày',
    ESTIMATED_APR: 'APR ước tính',
    TOTAL_STAKED_AMOUNT: 'Tổng số KAI đã stake',
    COMMISSION_RATE: 'Hoa hồng',
    VOTING_POWER: 'Quyền biểu quyết',
    VALIDATOR_LIST_TITLE: 'Chọn validator',
    NEW_STAKING_TITLE: 'Stake & Earn',
    SEARCH_VALIDATOR_PLACEHOLDER: 'Tìm theo tên / hoa hồng...',
    // Notification Key
    NOTIFICATION_SCREEN_TITLE: 'Thông báo',
    TODAY: 'Hôm nay',
    EARLIER: 'Lịch sử',
    // Setting key
    SETTING_SCREEN_TITLE: 'Cài đặt',
    ADDRESS_BOOK_MENU: 'Danh bạ ví',
    LANGUAGE_MENU: 'Cài đặt ngôn ngữ',
    LANGUAGE_SETTING_TITLE: 'Chọn ngôn ngữ hiển thị',
    SECRET_PHRASE_MENU: 'Chuỗi khóa bí mật / private key',
    PASSCODE_MENU: 'Cài đặt mật khẩu ví',
    MNEMONIC_SETTING_TITLE: 'Chuỗi khóa bí mật / private key',
    SHOW_SECRET_TEXT: 'Hiển thị chuỗi bí mật / private key',
    ADDRESS_NAME: 'Tên hiển thị',
    ADDRESS_ADDRESS: 'Địa chỉ ví',
    PASSCODE_SETTING_TITLE: 'Mật khẩu ví',
    PASSCODE_SETTING_TRIGGER: 'Bật mật khẩu ví',
    CHANGE_PASSCODE: 'Thay đổi mật khẩu ví',
    NEW_PASSCODE: 'Nhập mật khẩu ví',
    CONFIRM_PASSCODE: 'Xác nhận mật khẩu ví',
    CONFIRM_PASSCODE_NOT_MATCH: 'Xác nhận mật khẩu không đúng',
    ENTER_PASSCODE: 'Nhập mật khẩu để tíếp tục',
    INCORRECT_PASSCODE: 'Mật khẩu không đúng',
    // Error boundary key
    ERROR_BOUNDARY_TITLE: 'Oops, có lỗi xảy ra.',
    ERROR_BOUNDARY_DESCRIPTION:
      'Chúng tôi rất xin lỗi vì sự bất tiện này. Lỗi đã được gửi cho admin để xử lý',
    NOT_ENOUGH_BALANCE: 'Giao dịch vượt quá số tiền trong ví.',
    GENERAL_ERROR: 'Có lỗi xảy ra, vui lòng thử lại sau',
  },
};
