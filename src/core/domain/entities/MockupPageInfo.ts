import { Column, Entity } from "typeorm";

@Entity("mockup_page_info", { schema: "makeshop" })
export class MockupPageInfo {
  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @Column("mediumtext", { name: "page_memo", nullable: true })
  pageMemo: string | null;
}
