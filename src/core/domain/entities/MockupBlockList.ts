import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("mockup_block_list", { schema: "makeshop" })
export class MockupBlockList {
  @Column("varchar", { primary: true, name: "page_type", length: 25 })
  pageType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "block_name", length: 50 })
  blockName: string;

  @Column("mediumtext", { name: "block_html", nullable: true })
  blockHtml: string | null;

  @Column("mediumtext", { name: "block_css", nullable: true })
  blockCss: string | null;

  @Column("mediumtext", { name: "block_js", nullable: true })
  blockJs: string | null;

  @Column("mediumtext", { name: "block_memo", nullable: true })
  blockMemo: string | null;

  @Column("varchar", { name: "work_ip", nullable: true, length: 20 })
  workIp: string | null;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;
}
