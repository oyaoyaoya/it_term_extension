# == Schema Information
#
# Table name: terms
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :text(65535)
#  url         :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Term < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :url, presence: true
  has_many :samples, dependent: :destroy
  accepts_nested_attributes_for :samples
end
