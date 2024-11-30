import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_index", ["id"], {})
@Index("is_api_active_index", ["isApiActive"], {})
@Entity("naverpay_configs", { schema: "makeshop" })
export class NaverpayConfigs {
  @Column("varchar", {
    primary: true,
    name: "shop_id",
    comment: "상점 아이디",
    length: 20,
  })
  shopId: string;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "설정 id",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "mallid", comment: "가맹점 id", length: 20 })
  mallid: string;

  @Column("varchar", {
    name: "certi_key",
    comment: "가맹점 인증키",
    length: 50,
  })
  certiKey: string;

  @Column("varchar", { name: "button_key", comment: "버튼 인증키", length: 50 })
  buttonKey: string;

  @Column("varchar", { name: "common_key", comment: "공통 인증키", length: 50 })
  commonKey: string;

  @Column("char", {
    name: "verification_key",
    comment: "중계서버 가맹점 검증키",
    length: 64,
  })
  verificationKey: string;

  @Column("enum", {
    name: "is_display_button",
    comment: "버튼 노출 여부",
    enum: ["N", "Y"],
    default: () => "'N'",
  })
  isDisplayButton: "N" | "Y";

  @Column("enum", {
    name: "is_api_active",
    comment: "api 활성화 여부",
    enum: ["N", "Y"],
    default: () => "'N'",
  })
  isApiActive: "N" | "Y";

  @Column("enum", {
    name: "is_reviews_api_active",
    comment: "문의 연동 여부",
    enum: ["N", "Y"],
    default: () => "'N'",
  })
  isReviewsApiActive: "N" | "Y";

  @Column("enum", {
    name: "is_inquiries_api_active",
    comment: "후기 연동 여부",
    enum: ["N", "Y"],
    default: () => "'N'",
  })
  isInquiriesApiActive: "N" | "Y";

  @Column("int", {
    name: "deli_price",
    comment: "교환 반품 배송비",
    unsigned: true,
    default: () => "'0'",
  })
  deliPrice: number;

  @Column("datetime", {
    name: "created_at",
    comment: "설정 입력일",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", {
    name: "updated_at",
    comment: "설정 수정일",
    default: () => "'1000-01-01 00:00:00'",
  })
  updatedAt: Date;
}
