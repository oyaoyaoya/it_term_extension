# == Schema Information
#
# Table name: samples
#
#  id         :integer          not null, primary key
#  term_id    :integer
#  name       :text(65535)
#  url        :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sample < ApplicationRecord
  belongs_to :term
  validates :name, presence: true
end
